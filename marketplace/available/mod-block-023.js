// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G96059IXVjOM5HvCCbMO/luoqV8+L1WXz8MiouBJFqyguJ7OLzI40ZGPK+LK1b++wfUDQ2P3CScFjT0nBvPcKeoEHu2iel4b/MmOJhWQdbVBn1ACrSf9B7Lfvce7SO1zjRZA5VwSY9kn3nW4olihhX4s3o60+yBcocGBtMJ2yD/TDKc4c1r0dHwCFNKD7kliPPZuOwRw2rUSPzEJZo4zJ16V04BO47GEmaGazVLjxx2+4ohjf5zSfvvf8lFbLsb3s94GGraxoX9sPcK8JdJVNkYPWbOidhluaSTnZi7q4BVLMEuOWfx/K1W3wqvcaRYQpfjyDgiLM8T5fswbe2FfBYOvdrg/4NPaC/yDsywfs/NpyjxeqeBTau4t4Yf7S7Pl6Fh9vIhiFn5FwUweI4Mn/M/buyjT9+s7esQrISnmGDSyeQNxYJRcbrc+fDY7ucl/+iEd17Y24MJl6bgqOtMf71InQeCOYt/VAKO7GhVSjBiqmKKI5AR/ylrrEU7hFQouGCd5KEqsU6Lcbq3F2KkonlmUh4pkiHkY71znHRFTlonriaacRv8LoZYIha5TvxPf6m8uO72R3hpIdHBIJAtsx2ex4EdwcCCui3LO2xazeaUIVIO/GiASWtuN5Ub6N3bG4eURduI2dZHhxo6V2/M4sVSQLbEMtv97ASZj+z2MWJhfc4ok7cLH+yWPGopTJuoQ04USp9m0HTDl0csNj+nEUX8NmsgmU2Fm3aTOxlS5sxuxqsQm6mgxB8xZepYmrgTfbYExQLCxuhWwn1qduhCl+aDQbQG6Sud7odeugGY9zpmJKnu5iFMPDHR6sVie4a8GjCfb44i4n4c7SQtxKgo9n3lHuydWbSWUPoHyqtKTLClpA1eWrxLOAfIbs4dqa+NyiVyIG1UD0nPs1tXsneqL2qGhJ4Nqb8QQHnaDJl9S1zsNOkpvag5Zagj0oRSrQTjXNxFkuLuEw9tWPGsmZNV0eZ1xcN51MEqo/bCf0DT7En1NcrKIJ95aiXGpf9FlMWuulsV58slTZJquI3o9EujbFlzobtDLLJ6q9JA2CxYNZSmLw9LoBaXFzmE3jRyGTo9bgeQOcrigXIDXebrANvZvxr++DEXwYn2VWoijZFN0NdokRbT0p062LdLHxqiUqbDmHiE6HhUoisYrnArMEvRSAtnGARa55qJWc/47lnT1u4HWrR/96/6/BKXu6m2ccz1tO+5pqflndjYCU/dTlOC5GhkF+jowciLN0nyO/hxUFFy8MMO6+9Au0t6tCso3/qGb70eV7I/IakzV6b7Z2vZC84gMIOhVObU0Nu41txpmzsoSb2bdaj3N49MaXamESmPtdywVhSDfp2+HGEL2i2QpfcWP5urDjP5s8A==';const _IH='9dc2218207fe3f93f1a1c2dcd41e828cb82f9e5766afbdec7f5aab7f7cc7eb50';let _src;

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
