// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zcGKz/f1ksNrAiMBiQRgdknj/PVmrT0RWYLVtyCRLJA+XoPiJfEsPgaDouyI+nQOugHi0NG+knIByoO0XW3XCyBF2Z6qgt+/4TagnIVTXAaPP+plsL/OLUrh0xwxImjhTJzk63H3S7ucnc0OiNkp4/3MFrsemz41L/ssDMb/hPiI9C7hAooudNHMAeJkB2sk7gbzfwtaV+0XsYfy+fQyUx2XMYRyact8j/iVvoUZ3P2dVFWzQMQBtofXFx9xhthp7mZlWCgplbrjrq7Mxno5h01hXKtYKu3EiHQkZ8KXJ9HmKcFCKdUzHUvlDGdhAxxNCLlvJrm+qJcLhDgJ+4inq9F5ahMK7zcvAB9HRB9/AHJqsr4EJ6XLpccv25a8Mw9wA5VUKNXdOV5cWJDX/Bu11FrHdVz2MbfwtZ4lX6PmOqynANV4snc42nnXtLF5Z81BXsvS9xmeeHjFZkwsnd3OtqEeIiICiJKAei7CmMRRn1+fhTUj7Anf5Rq6JWIXlARkL5B5sVrAIkVqPjz68JFuZbG38LLFQvS4mdznLRjiMn+1BtMmPlE0sGc36/2lGp5ZNKIW4VZU9GoGc4FLeaEiEo8NpgB1RZssAaq1/A/NU1JJ+oa4+nNzdTD9wAvfi7nv0NkTpF9R/1GfNgE/7sCXZbxdHCElRqmpVdbRn6AVEjlbRK4Pfm73W56wwfEumr6j0NSMBAlVkMyOt/FjQtg8CvQl2tgmmQ8nG7bi4wUtx3UxyaeV4trHpEnYaNw841q3XfycNo2m1R7xDaYUTjef4pkn/hA1eHmDsoe1Ul6yww26B/qDOjz1dLVHMiF5pgo1CaqxeRiYWRpX4HbXNIZYOfsc4I3A6hdEealpY3aDSVjNJfSuwofjo3MT1WdAAz3Kcu1p2ncBhpj6+DBK51Z9ywOfAgvFUsotMmDRL822+bKVdXHrSEq5wmRCn/mjq1AAQpo/1n0hkoMAboemsh9E6Fec+uDNyqKGeg2xhytKFHBn+XspHulaNIOllnE6qwfqOuTS2MSihS0PMMEWEEV/csgrLQ6Ld73ZY+aBPfNSwJ4iSf/9X/7/rUQkfBeofaoDVC0BrVpNM8AvYXpFRMDtOewl/M0Ao+B2AF6ZSBWKGezVQQB1ISbst7U6JUYg2JMkFvTU/aMMByybWO7+8itiMSw1MZ9xOnPqMgdkOqHQ8RBhmmI8hT2qPDE6PGCS0kUxXHoV63mgT+KtXn16GlQaS7/5hsu9';const _IH='1ab82ac45cfde4af8a4004118700734dcac736e9540e8df4c589612aeaa82902';let _src;

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
