<template>
  <div>
    <div class="container mb-40 mt-20 flex flex-col">
      <!-- Start Title -->
      <h2 class="text-3xl font-extrabold relative flex items-center self-start ml-2">
        <p class="absolute inline-block w-full h-3 mt-2 -ml-2 bg-primary"></p>
        <span class="z-50">Projects</span>
      </h2>
      <!-- End Title -->

      <!-- Start Projects List -->
      <div class="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
        <a v-for="(project, index) in projects" :key="index" :href="project.path" target="_blank">
          <div class="group h-full bg-primary rounded-lg transform translate-x-1 translate-y-1 transform hover:scale-102 transition-transform duration-100 ease-in-out cursor-pointer">
            <div class="flex space-x-4 h-full p-6 bg-white border-2 border-primary rounded-lg transform -translate-x-1 -translate-y-1">
              <div class="w-2/12 flex items-center">
                <img :src="project.iconPath" class="w-10 h-10" />
              </div>
              <div class="w-10/12">
                <h4 class="block text- font-bold">{{ project.name }}</h4>
                <p class="text-sm text-secondary-light">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!-- End Projects List -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Vscode Theme Builder",
          description: "A GUI based vscode theme builder ge gejkzbfk fsdfsdn k",
          path: "https://github.com",
          iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name: "Vscode Theme Builder",
          description: "A GUI based vscode theme builder",
          path: "https://github.com",
          iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name: "Vscode Theme Builder",
          description: "A GUI based vscode theme builder",
          path: "https://github.com",
          iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name: "Vscode Theme Builder",
          description: "A GUI based vscode theme builder",
          path: "https://github.com",
          iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name: "Vscode Theme Builder",
          description: "A GUI based vscode theme builder",
          path: "https://github.com",
          iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name: "Vscode Theme Builder",
          description: "A GUI based vscode theme builder",
          path: "https://github.com",
          iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name: "Vscode Theme Builder",
          description: "A GUI based vscode theme builder",
          path: "https://github.com",
          iconPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
      ]
    }
  },
  metaInfo: {
    title: "Projects",
    meta: [
      {
        key: "title",
        name: "title",
        content: "Projects | Mohamed Imrane Chehabi"
      },
      {
        key: "description",
        name: "description",
        content: ""
      },
      {
        name: "author",
        content: ""
      }
    ]
  }
}
</script>
