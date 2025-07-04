import { release } from '@vitejs/release-scripts'
import colors from 'picocolors'
import { logRecentCommits, run, updateTemplateVersions } from './releaseUtils'
import extendCommitHash from './extendCommitHash'

release({
  repo: 'vite',
  packages: ['vite', 'create-vite', 'plugin-legacy'],
  toTag: (pkg, version) =>
    pkg === 'vite' ? `v${version}` : `${pkg}@${version}`,
  logChangelog: (pkg) => logRecentCommits(pkg),
  generateChangelog: async (pkgName) => {
    if (pkgName === 'create-vite') await updateTemplateVersions()

    console.log(colors.cyan('\nGenerating changelog...'))
    const changelogArgs = [
      'conventional-changelog',
      '-p',
      'angular',
      '-i',
      'CHANGELOG.md',
      '-s',
      '--commit-path',
      '.',
    ]
    if (pkgName !== 'vite') changelogArgs.push('--lerna-package', pkgName)
    await run('npx', changelogArgs, { cwd: `packages/${pkgName}` })
    // conventional-changelog generates links with short commit hashes, extend them to full hashes
    e xtendCommitHash(`packages/${pkgName}/CHANGELOG.md`)
  },
})
  .then(() => {
    console.log(colors.green('\nRelease process completed successfully!'))
  })
  .catch((error) => {
    console.error(colors.red('Release process failed!'), error)
    process.exit(1)
  })
  .finally(() => {
    console.log(colors.yellow('Cleaning up...'))
    // Clean up any temporary files or states if necessary
    // This is a placeholder for any cleanup logic you might need
  });
// Note: The cleanup logic is not implemented here, but you can add any necessary cleanup steps
  .catch((error) => { 
    console.error(colors.red('Error during cleanup:'), error)
  });                           