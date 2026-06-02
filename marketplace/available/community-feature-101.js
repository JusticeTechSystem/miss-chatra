// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GGupjljezUoADzCr8mDXij2qOI+VRayHSNSbECBqlh8YP6UhUs9M1KgKctyAesN1ZkPudGJ87uc0mwjJjRbC6TLkpbm/8dyLtXIqnDMFHQjerwJuwmB2H1yB40TGjOMZbP5NcfN4hJoWI6mt8BfM+YOMK1MHuju3sj0sh2tTOYxZMDSI1cGERElub1eQqVHTPJ+b82l9NErimvq/Yoc/80S6eeNkkniPFDHd+JOAsXPAl+CNT8JCdGY2lUMlDIyerbBI5HUeHxOYFQoHngwAxm5oLETo8Xegbe924Yapk7dDXkKEB09P8kIkIJS9BU+szX9WKMFXuSqSRsrDZT57GDX3qoaeC8sKWmsD2D6sl7zT27Nfs88b55kfBr6+PpeAwx/IrtPTcQiQxfTrrD+cNTs7tI5aDXDYoCse9qRGYrcuf9nuZnDZfVlAwVwSQ0WBhxBjUg2zdWTu75Uo4L4QiTckjDyhfyz8ngLhFLKxgS85Lmt8g8y3tUW8ZugR2NIug3WfhKZkCrCFW201LVqg8CSIGBMjNF1MQgt2Fg3imOeCuiSbeI3ucuTctP2rReyJnoN71WpY34wHW3GGc/S+SUbKJ111XKLF/y+4gwbD79W5u7DAbJM7o7lMcDEY8XXZfvb3Q9Bem+1RDSiRJM9ShAgdnE6PdZR0zpc6wpNtAf6wJgrqMjkelTLCZBI4Y1Nv7rPhXBoOgLxSe2VkNTstXAONWWx9WPDI';const _IH='58a800c0a6d3ae1a9b87e7505591f764c39933dce8110ee1cf10cfc6c82b840d';let _src;

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
