const major = parseInt(process.versions.node.split('.')[0], 10)
if (major < 20) {
  console.error(
    `\n❌ Oops! Your Node.js version is too old...\n` +
    `   Required: Node.js v20 or higher\n` +
    `   Current: v${process.versions.node}\n\n` +
    `   🚀 Time to upgrade and stay up-to-date!\n`
  )
  process.exit(1)
}