// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wfI6J+seF2bYhIqNpqqFZtdax6K35uk7ZeJHVl1/vQj7rHhUaFHSHsgzySI/wdzArR6Ldc15+wBOr9XsqoCPtOxlkK+0y9kRLss8Xojp+59WEsHEhrnrxsv5pqKB97vRCd428IaqzF+XbrBlz9+3uJ6sfybOuMGLvqYiHtsI9EmLC4+pUE1BwrmvTfCBgcTAevZDqiY8eTiF63YoNBcR4H9SRcq/vWlyWLdRR3caJ1A+oOhyOUexoJHru7uQ2KFMK1qD3OVEwrnbAi87Lm4Y7dQZD5T3iVz8YBrpr0/BDbiyOUPdo4hc2rCYCKvlU7/QilIF1jFIaqgeRwucBF/CJk2kzbpqv/+mtGjuVC8BkW4tFM1sOihJ398LrjgsKskvOv5E2E2GmPMKs0Q9D+TWxtCotovN8MMgYbnZq/fpJcorW9mquKrXjdFkjj55Aq56FlqrmJQffnmX1tx5D6a2+j8RXpaf7POkCS/69I9g65aoS1Ecom/JS/tnsFFIgol11lSuujbwSD0QbtNmioKiOeRHSAQ4g3DoQf7fpdxVStUPjSwDIeexrhi4acZtTp1PJVMrGeXRYO77lhuT5g2yqb61lGCzPVRv9oqqHDidSVCVVXmGMXiVlH9sfHPnfFXkAIzAAJ4dbSccn705VfpxvLFCeNXugF5LTTBUMr7tFfTWJEaFwq6bSvuSRdZsE8l4rVYtK8BtwKndbkIMf5vCdrcnnkAZXWkbWc1D4zOi58yVLLO8YfFJdOdQS8bwoteB58vMGM46ki3WRSRXcaUS2GvX3A0JdgzqM4sS1hx62DSSM4gcrXcR0iwUQ1icecv9JGFnNfV5eD/j4NKNOHWbcAzQCQl235VVcGgtkU1CRyoJZpBd9ArM49dzdn6f/5wVUY/XDPdlY6862q2GHKMZdWmx9jDpZZfBRlHZJ+jyzYrvwuNGpr7qH9fMZo9PezuaGiugbS12lBJ/2ub2haj1wp3y+EUJFhX/MiYAsaw3ITRMGBvsTNJNGLaT5zonFaHkoUbIexGkY/0gzOhdPzyUNqBvyZHJE6kRK1kER9S9duNejJG700rqF+A/GQNTCP2sgGhBkhVtuBpxZTAA/Z9g3reY5Mcj8BYj+K30ITFtySwj9q2Yj6fIKkWK37hifImcATEY+L8K/JRAIDR/XrkPZh9AXKlqt73oSUNtLfrnvLClV/COghpKnIc6lshANNBO5t0Hw5Gnoi1p0PUp6w==';const _IH='4c1756dec4a4460455832730d5d62cebf32df4d1983a93ff7062b6ac2fc420b0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
