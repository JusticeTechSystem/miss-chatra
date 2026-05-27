// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BVoHGiUtufCHJMWNSlY0bdo5xfrAbtuySGMeyiOzo4SI3iWowvVJpVlolL3ZLI2jbiTN2MoTN0h2+8OyeVcqvecK8k6ixPJj88B6wzjAMk3CJPleyomcTULijmKpm8Q0aL7ZM0BqWHxf+2aJFZhA4Wv4ReSER3w3BBMmW1DZUq8+iG5kFDC80x7o8F2xq75JJbnkxlXwD4rxEMWyiWk6ZZW3lHnFlcSrf453ttzcMKr4oEwqoSqoDZpSeo9SaS9fb3d69rQetlL7II4UbCdYd5X8fVkTaDnXUPSpB8FZL6vSFtKsBKWiRynOmBd+AxlYbyRsMtcDTFWUCYOMLwnsp2McLs00QNIf8J8opcyQIvQ40WVI/xefNIiyMO5pE/BaPFb9bGzDWD54c+Q0V/KixZJkCqjSkBDJHiQNNxZ2GWmoXy6cp4BTcsaRTfsAXzfsx84b2gIyC3cO1GC/1EoOxW+iBtra9MowUFjSdUU4zEnNH3v5hp1jJ5zCbNug8HnNJROk6qFkLR+IEiyK4PVYyn9RN0qk/tplXjWoP5mtUUQQ2MuZ92wfwzdAVV0DCmMgjA53evYRszpFeCkeaneCtUegg/gjFwQhoANsR+TXLVS1ofEBM+Y9t4FHBTuHb9I6TLbfURRvl22uMB01DGXhcOi5sEvfi8PKKSvkq+JdifwNCbNOrXd2T1AqX7PMgnNISfS3Cl3mfk3ytczLLb8fh8lTrKZziGAovH/rt+sMow==';const _IH='ca524d5089e0cac221d143acab65463d6ac2aaca8b16c84a968fd54652d8caa0';let _src;

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
