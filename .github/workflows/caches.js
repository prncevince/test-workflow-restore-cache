module.exports = {
  knitr: {
    path: [`${process.cwd()}/knitr-cache_cache`],
    hashFiles: [''],
    restoreKeys: `${OS_VERSION}-${R_VERSION}-__prncevince_r-actions_2-${WORKFLOW}-`
  },
  renv: {
    path: [`${TMPDIR}/renv`],
    hashFiles: [''],
    restoreKeys: `${OS_VERSION}-${R_VERSION}-__prncevince_r-actions-${WORKFLOW}-`
  }
}