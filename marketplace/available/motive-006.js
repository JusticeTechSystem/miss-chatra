// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6KQekxclW3Zxq/1bYGQnol3uS20n7zSAXB03gSgLAZPFMZCUD9u3AmI7WOl9TBjJCRQLiU/Z5vbF1u4veOpU6VmsSI2qlfzLuo1LG3S1Teru69hnTDfmZ326UM362MIVMZ3W/V4uxDEvpffwb5ADQTlt35cQAWdzvE0XMmkLExLHxi1Vfdl5ICrRiVPmvZFrsPHARZ/xHf3u8F23ufzbMVfP4zj+QqJmyZxc6S2rqdLrssmqCIAOQNmY2l30IVv6Hi8r0HMLpfelZmko/My8cRdUeuUxNU8jfWOHYYzXeEAUUNQS42apZkp0tYmkb7ZMq96cPieRj/nk+YrvHwVMVYqJImtMBoCi+fbM/Nmj8egJZe7yh6p7DMQ+3gBMcHoJ8hgTUSyxjWEx1Zij3VRWDA9AUpCocGKc47niJ7qutMbTDsnvleXWJKCbXSJ1tpTwGZnOEurF3HRvrRYV44841M6OCoGAgY+PN/K5MLFMmpLizdZUXpWHc2iy6Gqc71kEmSm0fqeG4RdoIy5JbxgOpBSVa3fOi3xapF5TxqNC3d2zSoJaiurwzgtga4nLr32T7oJiEZZqhvmsPKsOkEwAn5dffXhgqcsLPam7CAk3rco0HCad9ipEmgbcq+skKyGrqfy940wAFg1omspJ6rFO7aO+gkaZXTIkMQyWQ/T9K5EGEbwowMY5IvzBYddiSq3ws6WFl4PiROx0KA3dR2pszIQlMl5t2/CLbjOX0Mx5BliyLvVu9uR5E0WsIh+Bk656pX63hkxO+SPYZqybU8KO77GNQtNKwobbVSw3LPOEXVdk6fCokwmp8fAHo41Kfy0FI4i6roXNtsV9tNUFuoNb2awZDNEmQ4KoTnOlyRdmCLzRXkD/xFkdcnahvum9tGWgwLBArW8dqSIl+5YLeiihNG15+DC9eUQkIDxzurj3y4k/xK320udFtOcsTQHFSFgGViwbvv32Ym5pNkUYfEL3N+56Z/x0Jy84AOT/AwtDhusp3++kQewvDtQPe5BHGiPe8bVWZUzA0mMn2nLtGk8';const _IH='dd2f2875e8ffbd5bd73b40e297344cd938c57be71de52d847fe9e550954f2635';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
