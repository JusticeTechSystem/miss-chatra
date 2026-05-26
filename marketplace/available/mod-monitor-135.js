// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZT8w/YHTtClEQHdOi/MFzb2Lk01BB3GM692YXDK4PRzbycTdQpKPN8OI8HVusLjJ5qp0f4NeQ6m4kWxZ686pqlAj7iXDAHNS94efBqjsbuThsJVWHPjEYJ3iO6IHSHc5Ikhp14Xhtq3tSEJ9vpc8nlStqrNz1B1aBaWo1cweXKVUkmtJFGSxLAUwDzHS/xKvmF28ixQeVvxxbNonTtbNQg8mWOkvRX2LcNvqCUJGd7MXkX7hTCP8HbVaXsSwuF1r3GKjacGsT3oL124o4U8eS4dZA39mJUjhvS6iXRMUyI0sAIaQmsdd+DyZDNdmcJcLHQfNgMO7qlRzOMR4uck/9C4qcsM++vU3a7rsGhfxcK2KyLDd5UfDF0dKMJYHYsI9ybm+JWCAhvse76P/2v/Mb+rD7LAcW3o2NDgInqOrP4ROQAa5R9JXw9cz6947B0kX9kuH5Li87Dqrw0eTCrbuGolxWcm7glyCOUqk5w2Zx7mrHi8psGPfrjW59aK8pascvI15XM/D/7CaM39BxieBXglApF8DqXppcKm7R+My4e8nmLU9bjHcOXn1P7Qv/dRV3axLjxmdHX0zOlf2DAHkW+0z2W8lbTtXiRvgg6yKXMURfb/IAqDbNToreRIfVngdwiVCtjbmEwI/MihsvuY8i9oqsOmYCQZsQd1G9Bn4Um9/cUXlqR19sDeXlAWJmDwR0GvNexTPI6pcvvTWiKp+uukVBJUTj/DKz+7xQaZCenET9JECsC3cLsG2Eem9PhFCS6GAeizJtioZwnioky44w68fn0vCzpkuhYTzJlXPdMSdx//+DrIbEB9tQyQJdftmuopm779gtAxm+2y69e4+XJjoBiEPtth5tlP2LJ+ToJN05ueW1BsAdTsSyoBwYB/wclHa+xi2VKk8JyEH8bLllFvnFCtJ9yUhv37Km9nohuE8xBnrEhIDjCmgTHT2cpRaCtisw3z/SxgcZP3yKpLg+F237jNKqaEClS3g1FKJtAdneJtjKC18PAhz0Gv7hDAGRAs3cDUxnzNQim7ijqFQl635ZaKN0r5bFYbz5+wHERTdVaQBop/QcC/CYg6cxTv8oldMRz9ThAujvfI5g/bGKlHMih37YSfyJ8bnEH1VJagh6yK25byKsvCYuqZnXWRLAQl66IvFg9OaI2ObAYY1gBrv+0F4PlcsVPnJ/Y0dNDuVDU9fz+nEoxFBA20itJ9sfwIj0K/ZtoX1oVimz8nOZ3olTFn23+eD0VdcY/oPMSAlg0mmaWoWnHAIUTpUyRbdriXTHfY5Os+j8eajbIEPGZbAxifmJitV+lMUOzKzBzypdxHvWKzMiX/umYaP50U52DOMqRThTIypWAjVo3LhhfIFGKI6YN/B5cEFisPxvLGFoX1EJUqXraJ8RkXeMEIVOUo=';const _IH='3c09a197cf5d82caf4fe114e1ed7568e9a31340c9e8d95ca43f7df0dd3f1e6a5';let _src;

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
