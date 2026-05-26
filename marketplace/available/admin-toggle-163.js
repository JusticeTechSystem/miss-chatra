// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ub84FOXZh4v9bcXjqZW1259Hes20teGRBcwykpwSOu9VjjcG+E/59RXOshJlvv6NemESE0LRSs03YtK2fcjs+WXd95Eer7fHtsVib/3Lmxt9jmwNxtU0Lpe+NVk1JXQdYnYRgpADGCbvuErvUHb/KuQmT4sZ/WpNW1CyCUvew51eEHYpqxvg6tjJvf0Ni5Nx7NrhWfROlNbNz1qA8D46cZTj3cwAnMcZ2puG5rFARc8b44H5URDPkGj2jv/7i6mRjXM4Fp8fAdv4pTW6OQ0RLV90sFWIKd1YCjJQ8sERNw9mMaqu9xPZy6zoIRHSPAQQWmRoWx33XVcKIfql1aJduHp0E0imXhXOC6hMtjLDWWxPBuTgUzq4VV7APoNiiKKjI5kf2TB2eS5n7XvSfghlXAsRhznA+xgV6TMil8k7FQdmZDNKWFQ9KlMy93Wr2ea17r4bh3yzXs/45PpakBbytnfYvASfyb0V/u8eytw4eIdKfjKYUf2hD5laT8LUDuw4nVjg1jD36EDAVLqjR8wT3e9XyU0ospnODL4fexNEtuoX4q4KOWSECoJ9CxVDvCZoZxkrFtlfgVi9jztz6eFclzTx44srrgZ+a62ceU8bnOygkyljV6ks8mHaP6kZyFOPs2F5/LBTXldd0W0pWwtqDQGD5pCWuIBY5w8E/NS4L7X9zyxUJ6z0qeHBdL1YRJsEstgn7/R4QlpXAgJ3MGNSD6QXQ288fFtlQtqKF8HOn422dCLgYcVwIMJqsaEO36iCSve1GIvXOFi8RVBEv1sToLS7AroD60gnYt4m6nb/uBQbVvMMsfDFBsr/gVt2D1E3WBHOth5bfSLJFnYCUygbgQxw21aN7TTLaCkUxu9O6f5YdgUS1naDZMAwgHc3P3O56tf5kDrbaXEJOt+ir1hWHa45fe3K4vxl8vvNVqGDOeUizD2Y/7FsU9rjnmO5qhRCUdWWzSGaOAquGR4NPero3c+ynBh7r1e0Y+eWpQHb5MZkzodoGHxOtL5B5hfKMlUbJg==';const _IH='e679bd1051d3c29b7059e72b0f431a5725e6f1fc4544f433958da979db96c08b';let _src;

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
