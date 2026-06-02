// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='91fcKDBxAk6uS7dumUoUPW7SiHyXvM3RdJml6bHpGe9qti1UJCjNjl5i9rMWWhvAX1+YYMrdGT3JQZUMg6YJ1EXl9A/lXWZuw1Q7tMg7guNR3NsSwH4Pj/2cBFMGfmBhgJ3Q6++1u8OypRhxIdru8OrXih7rB9p/kfccNBucYquuyelp4ZjrO3+WFdp6dGTjc7bla3z3SRQE78Y4fTZa4NOPr5NGaehU20nW3D0Gl3yd5rxoDJyrp6q0cxhGb3TYxXB/rRaT2rTa//5cmPe+FZ0mUwPN3AlCU2vjSQ/OpRm5k8M1SPNrXti/exnlRIUtfcKPPB1KCc7qbeXruG7+LYRhf29t6vhjFmaHZvipWM2lO9xWz+Ye6UzvlozJWpQgyC3U8/xKerymW3ZhLzI1Z7sl1XMcV8BGCjENdzC02y9KUuuQZwclpAj97htsZXvNN/XFh8frgBaKWlgIhmLFkHehgd8RDF7+Fs38jUZgswKed1y558wtTaDaC373grS7xf5TwB66fR9oBV1hmog9zIsSBI/0AgHG8wA7kqWKiAhB3OwS/UnfYe78/mr9sXqNba/sMAMRVS85F6XksDQLsjDomzWMw+rNPHYIkDmjr61W0Lfac8F09eBavlIDNYAOpbaUuPdjxZ4NhxurJdxBn8mrfbZ6XvYi01Z+xahq/bKzOvN3xECAy76jrHcOxFNusTit62AD0thApAKT4ZQySvM83ghFwjfdWAT4Ij1bVMKsw8hT/5g=';const _IH='100394146c88b2ebcee4cd877fcc17ae518cd5b06c7b6f1f9ae4f6226b31346c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
