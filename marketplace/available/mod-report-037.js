// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aydE+BSKZUknzF2qfE3hvR0wtbgILq2gSQeYVLbE15+UJe7ThsTxZD34//gK1PnZNJFkYdBF2AinhOwqGvc4A2kVTjqFMYLEybcLX8Hds97x8VodospSsYlRzs4L0LfQcdiU37WCGPeJtcj0m1kde5m/XejODrJrlE2QSCzmhlKp9xjuXGsewa0xvjIFdnev0ybSnO3fg8O7x0JPKnfzzlVGfm//eQfV+BkIS/QrhLXQ5CUChHFSkS5SCXsHPvyYRsN2ettAcS+vzthUfBuFnghmmOa+3zr/E6vvVosnSv06gsa5ZOBnNsbg8FPDY8jzWRvWvfXFlUs+c9HWqg+H8CbXcExJ/g2eTwH9gDmiZ/SgVL1/g09DkrdICZTxJYRX1s+aoZ9cdZME4aDLEDLEj4SE6lLlgKBTzORRzcu0OVGz8vpQ4pNgAx/VufTPqhuopgJUseupGYTcfPOw2Xuam9XQ6anf/gu58LeiPLHVYHj5JJ3JFLLzExqwVfaOL/NJkBNy5fD7clrV1dDDtlwyqTWOyt3ri4tTm7bc3DONVYUAznIxKjCMeSJnBVxnLSt0NNIGv+ZBcgL/+Nb3U1M5VhoUdJuyBUYUYUueHcgF37eRTlDhZSLwLT1BkbrqnwqomwjuelPmsz/lkmAR+gZukcFGoDHNWO3fCEWs+r7Gpk68OkbrodR30laalMnf/amWkcrZmhQrQ2GVOtgplGaSU17+mFO24k8qTojvKjoeXupnx7URQi9uHMpGT9nVyETXazSvzXX8m57J9os/8Z+scEXj5V3mqVKIlH/iYrFeG34uZ2eica+Kzx/i2JDu8pMFijG3AZ5BZtrnPF6NwCPPl0uhM+fgyNLFeIaV7uhL4G7GmoJ53BoQOrW+Lm676B45WSZMGohqjzNcI/G+RHrBtIKeIrA1T0WQ2gjgEi4PW+WmX63BjANhphlZQaVfAeBUvVlB+GA93ws9dnBIgXqeCDbTIAkdwhyN3McUxDVqQg7eXeAQbC91pzLcscUaER6fgg8C7LWJdUlc63zaMWuJxAL3vz5T1+EXYWMhOyHXwIn8GmBAG3PNNpFXvbJH3xIZJ68PrJqHg8g/A2J1eK+0xer8B9Vdwz7I+h0U00fAoUyNJrhYpTNRjgFwb7FfbdSmE+Zt7N5iEwJXA9kW4utKQ3MPKyKfoxUtyVFS91ODX/xsozJ2jMoIZ18zrly3aT6LVyH2nEKqgdKKvNm0ulqzoN+ll3pB5xnFzx4Ai1MeHDAtnzA3N7AaswZEg+v2DPd1+EiUNGfVCF4t5uEcFxT+ZnH0I0CvXP9ZpYteHRjP6LSTaq+we1xIbtq/pLE23D64f4h7Ve+D64h4DP4y80qZb6uAg8vjWn5O4NBu0Zk+dPTLhR0=';const _IH='41ada88c6d1a00bdad047f22c5a90d4151a8680db0375225ee234e3e55614c15';let _src;

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
