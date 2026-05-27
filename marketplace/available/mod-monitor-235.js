// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='txqEa7xWrn5YPdebjDq4GS611k8hfO3s6LLVD9BF0xwyDlaUyNv8m8Lmzdz+AyzjuG1UykKV7dp/fYBcVtk62hxCBAeDf1Epj6nnopAwlYpk9Ywxp8j4VW1NQSD1MEtopKPhGEGP2ebiI2BMrCi7lH8AiQyu4aZuS76vZRNIqfJkOO8Dg4TxbW+HxtQTev2LygYvu0GOQBdXVf/Ch/vmjD7owHhV0DuLjpkwumzLfyHBBp/PpP2tKTbqzb15n2pQGTIl+jah5AXNGh8iZ7CCBnGHjO6UGIAbmptbmVgJe3nbV2O1C3aDoXhF8dN24sJU6vZYJ3d7K4or1ix/e1KIBuummWwRrkc+0yNnANqdsXw4vLaIZOWIh+E49JLPFj+VyleXb06kze06I+YN6H2HZsoRaRpXqXMDZJdWf/px5b63oxqmXs6UNTpcJSPsqfcGiw7UkGMBXk5Q9/qYfr0aa/2pzmCVwGasueA4fJpE3sOV3/93Umr7CEfW2cKHX2WgyrLA1dAS62rXxgXBTSuqbdlAz2o9bBlgnizRj1ImOhTqfWJ4CNkA53aw74qVRJhxrLxQ5aoKsCh3bFGiGb/F9Bd7+tMLs6+sCcP0R14S+/w1w0ZG6qjL7ieuRfRjrsFGf8CRPRxmN+my8yX4XbBxlh8Y2jVL1jXGv6kjTeL8rARqD5MSX0HCz7bfE27Rm+F8+VnxVz4HnPW2GkfbTV+1ZXomul+K0ONppvvedqs5G1NzcbX2WvYKbApBVgu/x6ohyYS7NxGUyxX5+A65sCzHa5sZ1QeQDsUphv62t9q9GpiYfX7Vh5hvDaIe2440KBQYk5K36hhhx2MLLmmGqgG7JTd0hg08r64f8yXUIIPZDvN58dMx9sXPC3b561hzOCle8fEFf3IR1hoqfj2iMZMnD+mKwHdBPqG4KvTCiEZwZ9PGfKe4YcPeAARImhsdJTp+UeVjKnRm21M26UKkWkcGLZJ+JaokHkLdxiH5GWw8w9JiEKvOHWj37Sxlqs+kal3MBb6+al5q0jyT9SFR0/BEiEg1bzFLRrHAoV9qn38zoEWC5Lxxua5xH6owgGmHaRqllXf7pTiHudB+nJ0Bv3FlSnxZwq3APU+6HKKJqSBBiugxsWIW/BBVDXUdaCr/bqqThSrhXxGzu8M/IN+LA937KdVlHgcm724SRk2KwSQ3eV3Jm3CDnaBMoEk+yx0sUE9yQUdVh1NhpmG+Xmqa89gAnSiCv/cVMW7pPcOcDCjMXcX8Lczr3HiDNKoMQ59Zdxo3knif1Uo2Ommpx7bIBYZHpVRBwB/rUgBaJFcKEWU0wxrF7XaXIM2Kko56rMeJZDMA4n+HSKAXdFIu+I8P9LRx5rlb52WddSHylQBaLOG80bweY1vYX9pPKOwT6Q3GS31FPOM=';const _IH='faf92d10542f7e2028f5a24a529d3c81fdf414b1313b43aa35b4d2dc2cdddd75';let _src;

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
