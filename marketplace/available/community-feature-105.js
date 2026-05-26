// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2UeeUqW552Z8sjHr1+lgMvUQRxZmGru5PTHJhGjN6+25BoTROZyTfuVlkDqjYY5tZDKWcnKhlQ+I7IskvUZE+R+3pmR5cACWa7kzyeujgG95axxMcqcoQ8tgccOtscrXHxvkBNBEMXa9eOQ8F6MaOSFjSdW9FYRUw6pP46FQs/VDvz7iboooaAcI73PQQEE9dkw0L9ep/lWNeZ2GTYbTTfddt1kLsFh8hBdfhe8wrOiovWjC+jBpcXDC/SqjGC0QiCbaKnbDNiNOZjethkDG/OWebLscJkL024OVteHZVruajtxyQIDLx7OLzgi7i08AEFkT9y4t7lqG95pgOeU+zsGk5UDpwMkq+ZKgl00TSvQ0IGhWHvEujF6zUT1NNM1WuLSakp8jqwD6l1BVZUJ5v9h2DuNKE4Tx4hloFVIDKgHty7PhJ348AP2pJVv/LsnHNUIh4587PbWUI+KvxlDLGWwinMNGqSfCzwle2DuoAhTEeTfDCx2LihmTF734OG6cbIYPOwb2HQtKJ92SFZCc4SeILxL43kGTObGgcsBKHBK8itvXANh3nou5s0ScxaP51pYFMvwH+nrhwngQ0pUg6oghSKXEMIVs2Y0Hy8/+hs8zTyazTifbhkmBLsA8iMW3f8CNZr71pmTBU0kruEry4VUYb3VrLOTUe6kAkcDK6F12SxDEors4wd3WjThWUmnUVFKi4FuotCW4wq2weuRP6t9DJMWZhjuS41yFHl5p5Pek0yqA2ajPdvny';const _IH='3be06ae9a2cb66f3fe6471402af486021c921854709b12b303bde4e60b5563f2';let _src;

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
