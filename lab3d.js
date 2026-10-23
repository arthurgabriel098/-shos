
import * as THREE from "https://esm.sh/three@0.160.0";
import { OrbitControls } from "https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

const container = document.querySelector("#lab3d-canvas");

if (container) {
  container.innerHTML = "";

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#061424");

  const camera = new THREE.PerspectiveCamera(
    38,
    container.clientWidth / container.clientHeight,
    0.01,
    1000
  );
  camera.position.set(0, 1.5, 8);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 2;
  controls.maxDistance = 15;
  controls.target.set(0, 0, 0);

  scene.add(new THREE.HemisphereLight("#dcecff", "#101a2c", 2));

  const keyLight = new THREE.DirectionalLight("#ffffff", 3);
  keyLight.position.set(-4, 6, 8);
  scene.add(keyLight);

  const blueLight = new THREE.PointLight("#087fff", 35, 20);
  blueLight.position.set(-4, 2, 4);
  scene.add(blueLight);

  const rimLight = new THREE.PointLight("#43d5fa", 25, 18);
  rimLight.position.set(4, 2, -4);
  scene.add(rimLight);

  const modelRoot = new THREE.Group();
  scene.add(modelRoot);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  let modelMeshes = [];
  let selectedObject = null;
  let originalMaterials = new Map();

  const info = {
    title: document.querySelector("#lab3d-part-title"),
    description: document.querySelector("#lab3d-part-description"),
    setting: document.querySelector("#lab3d-setting-info"),
    icon: document.querySelector("#lab3d-icon"),
    status: document.querySelector("#lab3d-view-status")
  };

  const componentInfo = {
    stick: {
      title: "Analógico",
      icon: "⌖",
      description:
        "O analógico transforma a direção e a amplitude do movimento do polegar em comandos para o jogo.",
      setting:
        "O analógico direito relaciona-se à sensibilidade de mira, às curvas de entrada e à zona morta. O esquerdo está mais ligado ao movimento."
    },
    dpad: {
      title: "Direcional",
      icon: "✣",
      description:
        "O direcional permite acionar comandos direcionais e atalhos configurados no jogo.",
      setting:
        "Consulte o mapeamento de comandos do Fortnite. Não é o comando analógico principal da mira."
    },
    button: {
      title: "Botão de ação",
      icon: "✦",
      description:
        "Os botões frontais acionam ações definidas pelo jogo ou pelo mapeamento personalizado.",
      setting:
        "O mapeamento de botões é diferente da sensibilidade dos analógicos."
    },
    trigger: {
      title: "Gatilho",
      icon: "↘",
      description:
        "Os gatilhos superiores são acionados pelos dedos indicadores e executam comandos configurados no jogo.",
      setting:
        "A resposta física do gatilho não é a mesma coisa que a zona morta dos analógicos."
    },
    touchpad: {
      title: "Touchpad",
      icon: "▱",
      description:
        "A superfície central permite entradas por toque e comandos compatíveis com o controle.",
      setting:
        "Não altera diretamente a sensibilidade da mira."
    },
    body: {
      title: "Carcaça do controle",
      icon: "◈",
      description:
        "A carcaça reúne os componentes e fornece apoio às mãos durante a utilização.",
      setting:
        "Ergonomia e conforto podem ajudar na consistência dos movimentos, mas não substituem a configuração da sensibilidade."
    },
    generic: {
      title: "Componente do DualSense",
      icon: "⌖",
      description:
        "Você selecionou uma peça do modelo 3D. Gire o controle para explorar outros componentes.",
      setting:
        "A relação com as configurações depende da função específica da peça."
    }
  };

  function identifyPart(mesh) {
    const name = mesh.name.toLowerCase();
    const parent = mesh.parent?.name?.toLowerCase() || "";
    const text = `${name} ${parent}`;

    if (/stick|joystick|analog|thumb/.test(text)) {
      return "stick";
    }

    if (/dpad|direction|cross.?key/.test(text)) {
      return "dpad";
    }

    if (/trigger|l2|r2|shoulder|l1|r1/.test(text)) {
      return "trigger";
    }

    if (/touch.?pad|touchpad/.test(text)) {
      return "touchpad";
    }

    if (/triangle|circle|cross|square|button|options|create/.test(text)) {
      return "button";
    }

    if (/shell|body|housing|grip|cover|case/.test(text)) {
      return "body";
    }

    return "generic";
  }

  function selectMesh(mesh) {
    if (!mesh) return;

    selectedObject = mesh;

    const type = identifyPart(mesh);
    const data = componentInfo[type];

    if (info.title) {
      info.title.textContent =
        type === "generic" ? mesh.name || data.title : data.title;
    }

    if (info.description) {
      info.description.textContent = data.description;
    }

    if (info.setting) {
      info.setting.textContent = data.setting;
    }

    if (info.icon) {
      info.icon.textContent = data.icon;
    }

    if (info.status) {
      info.status.textContent = "PEÇA: " + data.title.toUpperCase();
    }

    document.querySelectorAll("[data-lab-part]").forEach(button => {
      const key = button.dataset.labPart;
      const active =
        (key === "left-stick" || key === "right-stick")
          ? type === "stick"
          : key === "triggers"
            ? type === "trigger"
            : key === "buttons"
              ? type === "button"
              : key === "dpad"
                ? type === "dpad"
                : false;

      button.classList.toggle("active", active);
    });
  }

  function selectCategory(category) {
    const mesh = modelMeshes.find(item =>
      identifyPart(item) === category
    );

    if (mesh) {
      selectMesh(mesh);
    } else if (info.description) {
      info.description.textContent =
        "Não foi possível identificar essa peça separadamente no modelo. Gire o controle e clique diretamente nela.";
    }
  }

  document.querySelectorAll("[data-lab-part]").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.labPart;

      const category = {
        "left-stick": "stick",
        "right-stick": "stick",
        triggers: "trigger",
        buttons: "button",
        dpad: "dpad"
      }[key];

      if (category) selectCategory(category);
    });
  });

  const loader = new GLTFLoader();

  loader.load(
    "./assets/dualsense.glb",

    gltf => {
      const model = gltf.scene;
      modelRoot.add(model);

      model.updateMatrixWorld(true);

      // Normalize size and center the model.
      let bounds = new THREE.Box3().setFromObject(model);
      const size = bounds.getSize(new THREE.Vector3());
      const center = bounds.getCenter(new THREE.Vector3());

      model.position.sub(center);

      const largestDimension = Math.max(size.x, size.y, size.z);

      if (largestDimension > 0) {
        model.scale.setScalar(5.5 / largestDimension);
      }

      model.updateMatrixWorld(true);

      

model.traverse(object => {
  if (!object.isMesh) return;

  object.castShadow = true;
  object.receiveShadow = true;
  modelMeshes.push(object);

  const materials = Array.isArray(object.material)
    ? object.material
    : [object.material];

  originalMaterials.set(
    object,
    materials.map(material => material.clone())
  );

  const name = `${object.name} ${object.parent?.name || ""}`
    .toLowerCase();

  // Peças que devem continuar pretas.
  const isBlackPart =
    /stick|joystick|thumb|trigger|l2|r2|shoulder|l1|r1|dpad|direction|cross.?key|touch.?pad|touchpad|button|triangle|circle|square|cross|options|create/.test(name);

  materials.forEach(material => {
    if (!("color" in material)) return;

    if (isBlackPart) {
      material.color.set("#080D16");

      if ("emissive" in material) {
        material.emissive.set("#000000");
        material.emissiveIntensity = 0;
      }

      if ("roughness" in material) {
        material.roughness = 0.32;
      }

      if ("metalness" in material) {
        material.metalness = 0.25;
      }
    } else {
      // Azul elétrico como acabamento principal.
      material.color.set("#087FFF");

      if ("emissive" in material) {
        material.emissive.set("#003B91");
        material.emissiveIntensity = 0.22;
      }

      if ("roughness" in material) {
        material.roughness = 0.3;
      }

      if ("metalness" in material) {
        material.metalness = 0.35;
      }
    }

    material.needsUpdate = true;
  });
});



      // Recalculate bounds after normalization.
      bounds = new THREE.Box3().setFromObject(model);
      const normalizedSize = bounds.getSize(new THREE.Vector3());

      camera.position.set(
        0,
        normalizedSize.y * 0.28,
        Math.max(normalizedSize.x, normalizedSize.y, normalizedSize.z) * 1.9
      );

      camera.near = 0.01;
      camera.far = 100;
      camera.updateProjectionMatrix();

      controls.target.set(0, 0, 0);
      controls.update();

      if (info.status) {
        info.status.textContent = "DUALSENSE 3D CARREGADO";
      }

      selectCategory("stick");
    },

    undefined,

    error => {
      console.error("Erro ao carregar o modelo DualSense:", error);

      if (info.title) info.title.textContent = "Modelo não carregado";

      if (info.description) {
        info.description.textContent =
          "Não foi possível abrir assets/dualsense.glb. Confira o nome do arquivo e se ele está na pasta correta.";
      }

      if (info.status) {
        info.status.textContent = "ERRO AO CARREGAR";
      }
    }
  );

  // Select parts by clicking the actual 3D mesh.
  let pointerStart = null;

  renderer.domElement.addEventListener("pointerdown", event => {
    pointerStart = {
      x: event.clientX,
      y: event.clientY
    };
  });

  renderer.domElement.addEventListener("pointerup", event => {
    if (!pointerStart) return;

    const distance = Math.hypot(
      event.clientX - pointerStart.x,
      event.clientY - pointerStart.y
    );

    pointerStart = null;

    if (distance > 5) return;

    const rect = renderer.domElement.getBoundingClientRect();

    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    const hits = raycaster.intersectObjects(modelMeshes, false);

    if (hits.length) {
      selectMesh(hits[0].object);
    }
  });

  document.querySelector("#lab3d-reset")?.addEventListener("click", () => {
    if (!modelMeshes.length) return;

    const bounds = new THREE.Box3().setFromObject(modelRoot);
    const size = bounds.getSize(new THREE.Vector3());
    const distance = Math.max(size.x, size.y, size.z) * 1.9;

    camera.position.set(0, size.y * 0.28, distance);
    controls.target.set(0, 0, 0);
    controls.update();
  });

  const resizeObserver = new ResizeObserver(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    if (!width || !height) return;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  resizeObserver.observe(container);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}
