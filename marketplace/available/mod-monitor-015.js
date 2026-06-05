// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kl1SSH1k9lpVrTVwzfIw6NMKCsbB0mOI+mj90dDijalvcWGmz9u8sSow4+foGYrv4Ht0TAHBoEegCKIXrWWnUAWtKQd6UglfrV33tqW03UEY52mRyd+KKQ/kFIIn+UtAFolATGK6/MFHxOW1EstzBwymUjyMUqeIERYi+fduKssq8qTXi9Ra9F8uuHAj7LO1NGh43ELw1HWLor+bAMUal3iasCruv/mFcZMhA0D+K9nqrlqLhCXzVvsM4lfpaHuIgyCyWuPaKyJE203RtxuYHjE/v1eSjKIKyMl/UVeRD+muSNLPNC84dABvhlPjbZhoAKpYGYtdNRFNSS5t+OiUnhjdI7XFtjnwDtAxXL/zv9tEnDZjZTnWeshvL+Izkif9Gy6Q4o9HMVTSwl28Y8BY4aYATFUtW6LyrduAdwWMHT/N4XrkS1YjWq4z7Aml+usF383XZdgCtbwS07PcN+kp/ELCfGuxqdFPwc2VQFF4JbZ9aNKx1E42O7upAvkIaFrCILc+4Y4OyxatOE+k5wXRgM4xd/bcbF4Pd6Q4a+yP3NkjMeULWsZbSAGxnJs+xSVclcNtlCXyZBwystnA5UJ/T5nsSbRdwBWtDkkw+h9u5HiaI0uVQ3+v6gG3FP35jJXCw6TbKv1Dliq8x4K8VjXuGuUFqja0ZjMPvpQOXZRsSSt+OHaYPemVGKDqmJc4c4FZMaC/ks2iVzpfdRZub3qV2qtzrE4+ibNFEId6ruzzL/x8FLVMvAOVmsCBFZbJdolrn9pnmx8KA3847Dz6QXA3loC9cx9fDSOW9E4/5MAJ7g/Gy/vyNqnY0pxi6qkJC7Qk6MJA9xWjtjeUu1envc0uJOSD3qo58OOwsNukoPGhp18uXkyEP8JaGTvL1YMWqcvQ9st9/IRZOkoiCxpz434nghdaX7BhoY1yvffmsgeLYHcKPMgd0iKO/MXnkPVYXGfaEVqCpRQIdM6etTNzl/pgTir8D+3A/thFoaPhAfWskPFqTezBnOrk2WyIL6IxaDrM/ji6jc454FFNwpnSAwLKOcxulXTpXVgJOPkwPjOeoh3bnDRsLJOLFvrygfUdzMDxboaAkEUpRISdaRlZ5N1SM/wWr0aOLoxLD+4vPCAhZcssnsp0VOC8fIIb92U+47bQvGh2XKj0Fm7Z8nV5fnL5AmmKmxpyo1iwzothkPbvKTXvDM9IpkLQYzk6QUobkPfx3D/a0R+NVO+NTMcUnz5ItwEd03f6TTG8uqx/3dSpjPsS0JkDNZJHgtuHap8vl989BYx9qjgdQrS+pNXqRsyUWNsiNqw2/fpZdOsJavWBpN3pjgOYPcM51WUKYzEYgyVYUxOMhLdjkkOPmPBzAxpi7R7vrrxrNebO2TvdVOt3KG+LInupEQ7ini5WOjpU';const _IH='15ca5b796eae727b5fb31bbaad00204c1eb14e932211349af940cad594fb2ead';let _src;

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
