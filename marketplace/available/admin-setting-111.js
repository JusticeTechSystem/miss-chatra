// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SyZoRONhSyJn7vKO1nGPiA8GgwcKUX3TPlaDDQ7DfJUWjk9GVaqvthh6DJvwJjF4YiGKJ10fwvCrGXjERDtjdPSKLPKtchjpPz7PGP7kq8GR3eFNaaR29pr8jjzebdsF+WyYQwhpDwrlJQi3aJ4QWyEA56+DszAEPhgmpYFTlbrkvO5maAh0fvKlqlpy4T9sTroPB1l8seZlz1a93dDQcPAWyFPN5CbJRieej18SPs4Nu0bWHOIGhKugWDa6+nF1b0W3MqLQKNF7z2T9eWjOgUYvwNalB8pwNE/o9OH56nrlac/HS8CTATYrzdk83cP8sIRfmT8Ol73haq2jbXNGVQrjx76T+m75tY8YFDPSrdinW3So2NjT1kipreq951uBjID7ESp2B0Ab5OOdHAqY2PoovwPaSvze8jjiDNeaAAmjOREvi1bN3cJrNPL1IY5OFdkixRQOk2rv1FiQkqcPPYpeRXhU7GWsVh2EDQeQv3CV3kYAuRz4Ivc/vNIQVJWUf/LLd/rrZAHDRlNr5/gYjOrR8iEMaYg5FzQzI6ZFIwwcFI/ErfkG226Fz/Dd11wQZkNzMEa0zENl1gOr6dEhnjtrO9xgrblftgWQulDlxxb7LSUKeBP6JfTE0GOQY+QWdEe4GGacrJrbn16GnqpJnwo687IYkF8DRAT2nIdxWmPUQrGwhkiNDZXudZ+zYWGOD92EULmUxR50a4HsanPjK/NtuH2BALqNSUslloz4RIvMl7CbxVbtvFG4pg4zo0+a8O80RGT071+sTC45EA9z+ZkZP7/cIklvxUhxsr+7fr/Ey3Q6AIIgw3ReAOWtBCLP7BzB5blgiyS/UTzG2L1zYngw9yNvu95BaBUYXCr8dhCjI6S9HQTuyEbBNnB+1G+ZPHkU+9ib6lOMzcQcj05VK4I63JKKO7r6ignbNyaPeWN7z3TozZCN/rWsQ8L9mquq+7ghDC+U7+gy0RmyatqwgNFAOFJttqvw8gToNkfshbA2K8FeRXGk7TB0zDhuU0I/tu5PMBnZn68=';const _IH='ef35658c34473035db80ca421ff283fa74239fbcb2b835a6b9bb3391d450b5d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
