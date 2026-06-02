// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e6GmXFTWQMDpRv+KSPp+oTBnZ+DjqHM1UModCYdGuGiiSTueYM08dvCt3J/+cpml/1/Ix5+eEUjaOuWszmle2TzJViWI+TfsCJKueXXSa70UfdKVnFZ3PLUHJlk/1DSiUW3DXnMjrnekokhur5ZN7iTzHRrfJsTuMkoFEBUf1laQyb6cs74eMhia8sK4yUG21OyZoBGYhH2wsU/I6Cm26xc9m7EZ/iEG/proR7ItsYWOOl5c66dgaDJJ1wbQM+UsZ32qQrLNZ2cz2DVk5TsWqMEBcICymw7JlxQmq6sR72rr3Ze0GGDSV8DYxj57fbqY/X/BfZ2blw06XbvkdOHpkKz+iB6qB22wC+jY2CNlxVaXmbX95gx5dSP2YZhwhi094mtpLI9KtDfE20CKHQdP2P8KakrG1cB1f+b21Cbn/CgmOD6bGtWDDhRh3MIzK/oo0qJjH2u+YgUulJFmVsUzt8/xiqZ1HEJY1w5zABdyZoCuXFVu3uXFK31rfYIvIuICD7kiMRNJzPcMWjzP4ECaWV8wWH52WnsPUso9lX3HPjnG+rKeOLft3jfBIvqSG8S0msxig1+/61xjOQC3DFG3gCORT44IxUQWgIwpLzfoUUKUYrqH77RH46MUEBYJPn8jOvqtXPStym9bAsmiXB84A044k6qy45a5ys1/I/ci3dmPyRdq8nHReYz6dOns0Fh8YS6FsTrGsxAgMsCTcPJ9Lvt/7MMzf5iqGc7Tk87CxOl+mh2S+GX09dsptV9L3ksVd0NhgH4n1DP1Ub7V3zz1Y5kA4U0kyS5+dMIa2VEQwObyGCWwt0mke1bembhOU3snQ/S0l72wBXZWhVvC65l7D/WAfBjBcN8mStxqeLZpFrCBHKsVqpQGXHeQHg1AKFe/bGAHaaSa78fLAMqKynxfRCwEFdGdgx4phyn57ReB8xq4dCo6aI53zPcVp4y7mYVGdxBnGL0++ZEN91ECTbvQDFzCwVS2D9EIjE53rRAJajV9IjpoXysaKPU4rMUuV3AB6IgRBNmGBywtp7sQXmdkDHGDYKaBMVLGx5TWhmzH9drHLoOPWq+1SFbWsZspXWnp9fj/dSTJ2jYpDUuMjpcFJRI4vey00x+uOIjn48JUJkcbnkis/uSyjYCcEQnahQeN0vOaFucGiJG01oh4OEmQ3JEfYY3TB2L+kBt5WlDf70NqntsAvEERJU5HD/CZMAUQV1ssOBym3C08uSKXGTTmv+PV';const _IH='6e2cb5773c8af318cf1aa48d9fa04f6e3c5d7ea3c2bb91938c48d22092eecfd8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
