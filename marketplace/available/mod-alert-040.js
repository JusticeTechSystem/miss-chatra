// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QM683wDAjhWBk/tpueBGyUCP6nJEhn40QS/aCTkbfI6BJy6TplmIfq9XEYEPjRhksJvHGb7QHJDPEmla28EAvr4KLf2uqEFmHyo6kpJxkw09GnRacb3ZAWs26lEd4vUyU+xZn4hOuDb3Kg4KuHMc5zKPtxlI6PY7qEZKt2DOKdG/InRD+hpxoNJGzwtJl/uxP//mTOZYd6Pa9iXO0ZQgN6J1hHJpTTWUPUk2XludxPVcJ2X2KZrxFawoR9ejEJ6f2HrLGo7JCBFSC0wSQgLUXZCUBEcHIXzfo8g2LRGlGoUsRR9R/GFCvGCBLe7MfkzxtJQdgKgFC3Cu24eQje3CEDFvADRgs31+/cF8wRB8Mjwvrh4pwpI/0liIkAo9Mlp8TMFhegsZEozuTisreI4DQr6y07w9jEXLiQtqtc4wuejhSEvjoZsjpy9aiKgCDwSx/fSVhBwIBlucNJS9Xtp1o76EuK/rX4xRsJ4OzVe/WuV0y5P4bgX2DKldllYEnOG0NpJuy6V3vrwDDXonxH40GY9rQU9sWjFukKw3Xk7ZWlIbR6bcG2H6sYSQDEb+pqgaGS338ZBpyPHsRvIJ5oJu+aRdl8ZekkxHM/du+bMr0tuyDTRbu0eL6HW00DWHN/TezZpUD0J1gpShJT5JL+0V4VP5y5xtJ3bl/w3blegl5LJ28x+2+Uh20rOiwYZcphg4P4MvHJJBDMFAQjDc+D8ETxufMHe0LwElps7h9xiASX78ABn2oL/wM+fzl9IqFl7M5HWV0LMtlRAk8heS1krO5Yllv0VzB+jNDCs4NArOwrfl8PJARsHal7PnpbJS5tzUV06nrrgPoPRNLJQ9eITo3IaZAHBpBEeHXwYEvfjbVz2PQUoqlKC+IRsUrBIyULpx0qK1kUmCH1DJLiEu6i2GWfvX9VkL7LuXZQg8GHAcSsWLt2QmqmeIJiqmDJmWbm3uhv3us9IIzBJhBSttONCGJYH1wFw5y8VeYYiNqZ05cokCjQ8qstpAwDEvzZJO1k8xZUyuF06egcXRBdXQIDMwSF6rq7Nhpap4yg8eUs7kehEVJB5Wvt+im3xSu6FBjV2yZJIpBgKc9/++okml8nsF+eywWPhCjfsxT2UD4ubK+WiOI/jDyL+g4eFk0SE0uXsJlehLBLYBuBO8HHHaVwqWF9Hs6WDajyEFHaDCcGpdadvPOLCm2YDdfcGazM01bAZ3faVIM63NG4azbtLg9/AlNujgewsHJrmMZK/w/WDzMazbsdutiWbh4dKjhvBcHvOjCXJnrSu+Auk2D5q7S0Bdxn3s52gQPnDuBo452GSBpUXMfppmeJlYVyNrUBQM2b5WKjJiUxepMmx6sW8cWv7dMgOZkNO5tAs+zg==';const _IH='0a1768d8c72fbac2c03114c9ea5de7bbd1466c10bfe1c9ca9bf6f6a1395d26b2';let _src;

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
