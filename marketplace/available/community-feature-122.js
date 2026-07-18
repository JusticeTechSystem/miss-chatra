// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4dJROKFCSLxj24mknd70bfTxQ9H3Hj4XVjBPorei7LI8eT9Z5vk1ckK6u02N1JoAWFDJBdDzhCHp9MyPqfN5XoUYIBcUo4Ks10RS8AdECepAI96XsHMfb/dX0ClF97JS5yT4kPMj65MhECd6fEc55ezJDSFtsJnX14L3YJ+VLRFzFfRqJm9y+IDrjBELhxD0ZsjeT44Fs+RSkQjEyMamarA6rRsZ7/ymmfaEqbEiqPIqn8v84p64UCPIi0RxTz9dytqxQ5dxXNEsMmNKM9EDKIMcHK80gEZWwyK2GFKwfW4WUKV8dBB46raeXAxMAVxjIj/9B6ezygI88ShE82t6la3/JN6n2hCJdPax94cL8DBlGS0XDx2TXz2tj+eBCuW31prvqQMHf/cmznMxZeJe18k+LhlAmESb/iCiINg4bul/bf0YM4IpY0O83giZZOVKyWtwIpLrNeia/7cdXkemJ9HC9wdNbUwPtaTYcI3bDPDnlgc3hW7yj3Z9Oh1K8ttEKXKnKRi2WoRlzEl1VPdIDYh4bm079rAqa4njJb8Yt+DqSeUEQ+jkTflF2zrp/eegrwk4+gcvtqZKdjIKPcNlElwj/Wh7MM+RZb+qX7YnVr68/GipleIES/3mNEEV+ceEWnv1/MEAc8dHRA4F3hrprAe0XH5GDYWqRL1mMdrGxA8qW2rNFF+/j3pprb5cOsmP/cUKcWA6LhuNMj1yWPfzg2mskyixcxSGOUeyWc8pjPs5slg==';const _IH='a7d9602207614d4a18002531d7def04aee98f9dbd406ef85f06216b9667f7aa0';let _src;

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
