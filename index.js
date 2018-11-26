console.log("hello to dummy!");

console.log("next version !!!")

console.log("i wanto release version !!!")

console.log("hen")

console.log("我要一个小发布, bugfix")

console.log("docs: Documentation only changes")

console.log("perf(pencil): remove graphiteWidth option")

console.log("chore: Changes to the build process or auxiliary tools and libraries such as documentation generation")

console.log("perf: C2hanges to the build process or auxiliary tools and libraries such as documentation generation")


function fixRelease() {
  console.log("fix: 运行`fix`指令可以发动小修改 1.0.1 -> 1.0.2")

  console.log("perf: 运行`perf`指令可以发动小修改 1.0.1 -> 1.0.2")
  
}

function featureRelaase() {
  console.log("feat(pencil): 这回导致一个特性发布 1.1.1 -> 1.2.0")
}

function breadChangeRelease() {
  console.log("feat(pencil): 这回导致BREAKING CHANGE 1.2.0 -> 2.0.0")
  console.log("BREAKING CHANGE: The graphiteWidth option has been removed.\n" +
    "The default graphite width of 10mm is always used for performance reasons. 1.2.0 -> 2.0.0")
}