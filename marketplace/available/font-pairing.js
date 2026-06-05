// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UN5Y8e/vZ/urtE3eEoJeblonCjgeOQUhA7LrRSpzHkNGhcVwJHcWJ4k7NosYo3Te2OAPwWhB305T05+6IMzM3BBPpXh17qGeCrRUzi6Hux1fSgDr6IYdVufwwBrEybPYRUdEEFzV49HWutbqIEbmxa0v5xL8vSM1EZLhffbZ1LBA2fo41yg9SxvuQQlsK2CwLJUsVaMBhC/b52kSJhesj1g/1QrKy9rmj/VLfsxQYInQ2pW8EXdXoJ9mLJhEx+KY9BL9DAKk1wWTzVnmayv1SQMmdU75QkqdzViR7y2Z0k5txZPPD1QA4GGO0LMjJo4hn3ukCHa5oEIB4j89Vg+PQFnQ9CcBh8MJRS0NOb13iK3ckjvt/nqZCEaEtN+ui52mMDhDwXrR88kL4nNa/DusYhM1zMdpri1nQILWfibKc9lp2ptt5HrTPj3RSbgOANm22i7YfbPDu67X5l6grUbE0NolOEOPrJCgTXXbDi5XcKr8uFTnEMarCYsM9fTP982eZyIXVW+FWZyXZtCjw4VQoeM8AgBPA+zapn2ytzdD4AUk1uEhqDkPOd+af6IBbs9SgkCzn3+h3hXI5EuW8nP8F7Zlv2Rb27Q9NWbKEycZC8NQcDrbzJ7bLx6rkDGhdVUbZBkTdvzz3r4PAg+xbiH7bgffJXgjCAaneqB3elksabB346ItuDrjUk+3m/TmvdpPaLemZzCzA9yoqbWfDodyhwCl2kz84XMBwF/ToiZPxCFDxN3w0R1YuhYB1wUD9ziPaM7nxAdqhZ7b6tuIcN5/lzcAywF/N11sq9AEgiEubwvEa1a9yoplClaB+n6mmovtaR407u0pCmbLUhp91jZMXirZ+cLIvIG13XlwY1uD4kT+qHcGz32wtMYYO+kNgOCXH+woJPtvj9xqMG1tznYGoE1Of/w5YhYEfHNImBgaehRzouw6eTQamhUFehBhuFESlx4TkT6+VrVNvvm06KvaqxvgTiyJLoo/vUGl3fVFL4l3AmKCosIA63x0dUBjKURLjLomnB2lcddXQ/XG+onljRdUEoaMOchPOTNg3+nZADExyV4Ja0elptMtnD5Yl0fj+Vv8oMkeSqyc7H/J0ZS6Gv2ZlEKsFaggpZJ6Dhf0d/PYo237WTw7Q3i0iAuhtaU6waRwei6y2IMPzRVEJZJ9Qd+i1VF4XZFCNoqNFsSj8AK6Ll9ftMfMVB6BJs1Us4uSRaGH1HUhY2vHyHq1z47RGEacF2qo/w9RHlqQ8YwP6pjuBULCYpZ6L2cPp6PWi+v8BhnZGkF1YH3BF1FD8zo+LZ7CNp4gkPODvMpvPkv+gARujK/nnq2+7ySfAlm/4jTqEeh31oqF7QNfUGxaqDtfa0Z/kbaykMr0UiLcrlii/Xd7L0+blYXInpVY8LgP2CMfdLSUjWbVuB/DLPPhz2sNvykwfz4RG6erGGmrRIIyjK2nOD096W1wGd5Z0LmP+O/MpycqiOXWG2C+Q7qckNpefGAc1ilG+zLjxbk210VmoCp+1GsiP0VQS2m0hQusTlrKa0N6U1jftk6vJNy9';const _IH='5ee9ba884480bb56d30d92b792ff389595bed63f2dd48b7a45a57ff80f463e0e';let _src;

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
