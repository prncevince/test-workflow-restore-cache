module.exports = {
  knitr: {
    path: [`${process.cwd()}/knitr-cache_cache`],
    hashFiles: [''],
    restoreKeys: `${process.env.OS_VERSION}-${process.env.R_VERSION}-__prncevince_r-actions_2-${process.env.WORKFLOW}-`
  },
  renv: {
    path: [`${process.env.TMPDIR}/renv`],
    hashFiles: [''],
    restoreKeys: `${process.env.OS_VERSION}-${process.env.R_VERSION}-__prncevince_r-actions-${process.env.WORKFLOW}-`
  }
}