// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDrtZ9SsfAPo7ggqYVDvHbb1LlA+rFAPkV6HjdRThEdwl4oFncxP88fOj4SGycSoyl/T3O3U8x4AmKruqKB/2fQ0vgBgpDaQTUXxUGfNl2FQIKEokHpRclYKWVArr2hi/17tAOq8+Oep1QyFSX0k0vu9jEoMzN6gGUDT2jhw4TwZFz/PsHYwUier6O6lSTU3MCYctB2r2S1kFGRmq0KaxdAu2GoANRLHSkzrvssFatMI2Kr9QWA4hci0qUzF8r8tpOXC+L+Uh16jK77G5kF4hYuNowkdv0FlTayMkMGh+zNLteAfBPGBPOXeqvfUoUsoH/NJTnj5hgsER236Sd+yRDbo9b9AeKS4MnwiABhIIgyrjdYgkXFbZCRvIcbHBxSJhAhLecMjAxmYLXQvkC5+O4Hyd08pngRn25Kp8le3d8hEvqMFgCbp9inHInsZAY1idcf5SbiIbZa/hNtxNujNb3/KEjpIdZMj+NB+wFVm4TlnOiMC/MlLIuTfE4kPhAgkcZv3smwoGHXnzbA5oL25XWfbbNncNsseq5a2CRq9WQejfAaBo7KQ3TgFrQN4xHdrEbJ1FduoehrGIj9fBpIjIchrUN7Zar2O52fHxurWj+IbuheKDG1HpbKHGZLc5qdkEU29fbN1BEcg7pdbcB8L8EEUiXYIYSAxsUj/6+QGPjE4PHe1gI';const _IH='e15b89b8ec97659ed45b93c9ecef57a46a5e71e297673f8188adb071d1e21f74';let _src;

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
