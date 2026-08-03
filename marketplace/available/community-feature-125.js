// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVgT13dMjKzAx2WF9ydaIO+YGa0ePaP66wqBIyJiEB2qANPMKwU2oTIHdHhY9zgauIjQdiF4xFE6IVH95fmvPM24Zh4yL31PEsVYjbmAZVsBigqGnweJbNXu7WDJhhGFisihcC2R5kN2s0TWftV5yI6uLuQOoCIHJf5420lJAsLY+8x98aSdqLxuOBoVOGu+gzd9jmwuMeGIoiOWN/pvzkuNt1I+T8e8Z6MbUxPXKrLLONq/LZrE433dSrYTL7y5lLRiUyJofDij0SGQsQUT5UHXmDv9WdxleXkcBbn3/6KNKQzeTCGT3y3gI1xCI2JJx1HXpkHHrRVflImgzP3OUKgjeWc6fb0MT4Z2fXLbezsJ2N3OyNDlOB2ava8Y86OEUlOLFgF0F547lXZo76RkXj1ken5OhPUbglRa6uy2boaZfSk8S9tVFX7nY6EHB+nAeDJfrPqgLRzXNHwICH69B+G64g+9LUq9h2Y0EewKXAvD8zBYRZA6Gy4tAVvfxqWbOt6H9WFngqtcr3MleJpCTb1I46+oePgl0rozsSagB5euS0il5UW4rRtxJlu/4d2BmAWju801rLEkzv/cJGexsJjK3BolsULFQn2ubPscHHd0U7bjkVFUYpQdSEYmeO3Js+AT5OnlRyG21YcYnNc8cNJ+JhYiI4le1b1lRw87x8lApWI/xRXH3KBZ5vRRDhmcKqKXRJpLbKCa0Qr2A9To/aglbAM/epYyw1bLGxK85tVh9zQR4Pxg==';const _IH='71411c73377142e7780612a18d4d313ee03fdb9911b603fa96c14205d09ba67a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
