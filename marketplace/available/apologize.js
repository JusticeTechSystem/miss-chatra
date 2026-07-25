// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXjtKPT0N5rPVIjyhSKgXFqrOjiTahAzQsVuoUqPRdzk9SnwZPOKSGZmE/uhcLqlPXjbhaRXDxMkHIz07Ch9ReCSiKq0AOGVRcnZID9sAU9WJFufibnWOcOnC4ooviF511Z4FuJLJGPdbszMnpTkJAGmf9SIOD8UIR1DsgCPXNxQvL4OwD+1pBsZWxTaEKyvc6T7EQbI5n07X70Orbn4N9RTGazc8iHPcqnb5q25ec8xUkhtWg8xYWxAG+pi0YfxQ9D/FJqoESWqq4RJqp1sbmsdt+d7knN3kqf5Nu+wLHR6Kiot31yTUtPfBdRvIVA8TRENFJQK/jmnMa5lU90gaKT9GKalKnFUuy33MW0APHz/EQtdUTRggGpHjJIpIW36iLR98ik0lt/aBo1tVSZPBYir+BlWaam8iBCpLLj5Y8k8Z5vq9fhID3QUnpp6oFtPCJDG/d8VxdCZmL2wUuAaEErT0t/PgB0HGAos3VYFG7QNvRaj79ox2Tbx5eLmBELbEy92I3KXH+WYPz41d0ZjpSrHI5sPCkdbNUOL31xhQDqzPm9WeMQ2GrU5N73i58oSXP+3/C469dd1G4GKKmZc6xpkdLpncdSS6FyFVyueOuhJseFvuiT+aR8Dj+1YeiCQ6qzhrWFymY/e516TucK1dFKJt7Nw6N4f5JH4gsf9T2gZNECFS+tFcBBOXUBbUvT/wZ//O55KaEuTo9dc/3x+9B4AaLksS4hwwtxUEHDev0YgNbz7EAa0cIUgDhMSl0pEjPL3Gf1QOmurZD04g1V4A465mtIleQuZfMMBYCrWjDiorsFv7o28R/OKSxU1LnGCoikEPG3cMKcHUgo5aRDGtaMUAO+7E7IY2EI+PGledLf/qo3QxmiRXnzv4kFzqKnNXF2xszi0s4+M94mOWtjfzgQOJQvRkkhZRlMckHMJqtQKtacpT7LRK2/8qAKTG0S2Rk3MVuRdNrGOeQOFeGYP8I8yoSwQLJXhAJO8UMVKkxGeYslSFy/NqWSDTV++9ezVPYuCMk9/Ok9IAD7BAUYBaDFYZf8wssy2zL8F5IHOoGGwuf4D6Loz+vHfjiyggfnwSlnQHbqwy9nwkLfwg3WuvBuBraRyTS1ci2C4VWc9o/v9PMXByUecsapLCcYhBnvgPYuS0crwEdoCGS69WhSDmZst4UPlJy2Vm9mS65UC8Y/+KFgBTPfcaRUi14PTEtl46Rj/K8';const _IH='94c3d16c0a2b7fa1e96eadbcb49011ba3bf258a89ba6626538cba051c0a02d29';let _src;

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
