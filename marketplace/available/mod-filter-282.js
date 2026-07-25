// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQoisM7fpUCCaKOF9zs++4Z4viKvRM/OZeRUDoxMwCT01c0O9KV5IPuvlcBwEVt4OirqVhJtKE+chtdlbA3p+o8lDJtZ1WVUJ9DsLciVwwiaG4en8s/oxyH63aLMAynuqw36295d6iEP52sRYga2A5dKroedaxv5gLKXAzN8f96FF23OKaOnbT/QvvPvDmX5dWmYBAMo6F1F0pNujSCEgCPHQcjkrr2LNjW/3En+vw2O8EHEcMQ3vIYXsH5iKOJV3Ag9vR045NK5dheV+hOz87lgD+NQopFzv9P5TfgqwhMetTk2TrG9YZvZTMMb3wQv/5wQVdcmVPhOACPH7m7/vg8ptAQFNv95tosACeh1mbSarTpFF52iiFOF59Qz6CodQnzHMeNxUncO1sjTwaCNsS0fs4ujIeXaW9Spmlyy4dECXLuI/mnHYwJmA6jvJKoIr17AWt68+o48Mazz81DJK8h2VoL0rUvW/KCBnxBwTJfLqh34yiUByjnb/IRQ7HwKwfYVmUqV3tA5iRIR44ZIcd8be9N9yM9ZEIXfNtgr/ut24slOWeeGIbsPSSuBF+JluxUhc8mWQdX22hY/aNPYYWl+MBof7Xnt7W2Y0qnVUhvj0SlxnNnrch8q/IAhQBNcsG+EgJsU8NpCn6P8XhOJGOoIg2B4lrDMXebrD3MElHBRwPbJQkkhbVbdOtltmVkt+LnzgBGbEqCU2gaLGrPR6DSZW/dNiAeejAY5ja5L/XhTicLnM8ByivDcl+mv2vzOZX+vpoSRHCEwlVCoSZaBvBOIYvSR/txKu890BEdLrUaO7sXxCowFEj/aqwQFNfTcD69L5iRrKC+wZwyh2UYcoAFWAgb2mF3Mn4FHYvVZ/riNvqeY9rdsMbbQgoH4rSP6oslUp7VNdMnhe+U2Zrp5Kma5HltX2fHjxAvGDtvkT89UQEogGNLIO+PiB6ASoxYBLQPqSnJID1qau74NKIzFJd+qpALtvXRo6IpzFSV12wHP1RKib+vfvJM/8pZjudppXica9MObghWvcz1go3tMcKtbToomV8XTTiWi/NJnKtqaLc0Ao6eCq7ma7yGoHufugmhsKUqk2srCJ1Xp8B0y2EKVp6SoV0vei0A3rMTPdpDqTwiOhywNtInFaj2JuVzNYvwB2nQSFL/pfebiTsUYtomaAwZvhcklklF+ceTavIT0t/B0WZIsOGVWvx6wrZ11gzhgY09VgPRVzJwFpAh+fC0XIm+mAipPR3rgKh/xrUfg/Kv4IuorY6nVbSzk4fcQrCAv3gm+SnOFulZpcbCICWfKfCf5UYszVD32CnkRhWz1h46MHEQakcVtM6zReHS5g4GtUCYibK38XGHKyXN/itD/MsqcUwu2+GuPxZqrRgvzopWUoSOhBs9';const _IH='88ff9f1698c98a5751a0e16b861ac14eecf9020a62954d683cb2a97a083b60c3';let _src;

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
