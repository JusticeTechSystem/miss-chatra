// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sJLByWsn4Id4M1UKFhPbOB4/BbrvCIfryYC/NIAI3yYNl69r5onVJWEI/1vEI/A27mpchuUdvyQ3zPc9Y9N9ZLPjiydZoKT6PL08uwWwk2lf6ocpzj37aPJZKzmmjUiXYCJb+2Z3nj0WNCk7BI84qM9slhvscQ7P7i/YTsfkvecqrQogOwaZZAGp++DfCTmnB12Awc+D5D4oBFYOb6TiqWHDe4WYFevDwW1SS5pPlQfKwRlleMtXtWyd89pRpmVFiFsnUjUwS54q2AIpeK4tsSRgFmpGIj01vze1OgwVfaoJrapkYOHQxiceFxHw5dfwBlGPTy1fW8j62UPx9zRdzdNHxrBU8a/99ao5c0bXlvH2lLNG9z9ELDJi3s8TCf/tPnP1+6VfPdoRQ02Z0pYILvSHyy9XpRIG9Ag9pfjawKnzF/+yijBQFZaa6fXaA2/FfQJXhWMqE5Ljdxvefj4SbJDq6hb+3x99rvzaWFXziW2Sm8xIZ1A93tEgYHVOSaYXWDjduR7sHv1BGnaxjS/ggPzueOc2p351rKx78d/6/Gce7w5wiSax5vbtj72RQJP3AHCBZZc7jMed9GNfyjv1+cNomXlK0NNQTEMYKQRLEFQn4OLDLgxcGCQkCDirvZX6Qn0sjInJfyKX0JYUi2lHzCKmiDW5XQXhE6yzar13i9cKL4gvgvdqZzSKAkhUw5LY8bibCU5PLXniBfd1LMA+081V1SV9pdriFZFCyhp1x6v107Zp9yMqn/2rGc3wRfaW0ZMy6DkF6FqlV3LDhccrLamubh64wfSmvIKL4sFj/xMt+BTGKAemsVL/+TW+I1y2aT4iFg+M4ZrebRhy65m70Y6qk4XibfEvmvBMhZMD1hxalnQGoTV3SlvMb4ElsYikPQkaLRbubrg9UVu1+fuuQBbx5N7c0DNkjOCbFktMKyUlAp1k+VM30qguWvT0o6IHskNd3hkClRNC/pEUdZcaAY63F9GKQJFwSXpbDWhDwfszXhoFIhUjXMwfJJpnGjst45XLr0/sAbyUvecN90UOjshAe/9h5WOOKhmN97JqyEEzCaxlVdQWemsNB81vwMZSC82CeVWsibwY2flR5OFZfCAgZbKKIWiBYllJ9nSgkD9hfcLT4a6TGJXJ2zG/5sbFqlXnEhb1z34d/jIFsBV7rIoOIqY/KRE2f1FQ+deLqL6U4yFeDEyHP6JKgu6gSQl2SQEWp/oqMHaRD7tLGwPw61KKa86EBogEWKps24nCaDaFkZ5zrJ2e3jYEpkI6GD0F8dNmDJ4dXi3Cm5FAsgXGa9Ra/+Z3sipFEX8zp7/HGci3RkS2riEfMnhM1+TPc1rR8Gd4RcTFKyBsFlSZ9QlmI3a/qjCT4clXQIa3iNJG';const _IH='fc8b37a9c67b232110465f0d1ffc72aaa0c4290d27645651f0615630812c36c8';let _src;

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
