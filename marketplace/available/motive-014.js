// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQDpIuRKxQu8XAVhuATRAOrHsGWbbbY6fqjniCBkQr0ZAKXDwx2Ds4CGavkaIG6aRlrOZ2IrBaAI2p7wKJDSUUosm+FyQUKss/Es0wVmDoNT8ioHq6e2gWXXa93BP9nw2beyZVt5LAWkwp1syhda8OzQmc1q0VVOHEbvRfGBKNZ2EDgBNDKGbwezDrr+Gd7bOx3MKCJeKyRQhDpOL/Rjuwpze+Bj0oVuT2qiGQMa//WjrIhjqPl9lhSbA8ukTFU2ms9YMxqHHOt34323t1JRETFflCHnYbSvoR09diU4mIPrJh4WfE+gijdfczUaMUKHN15LeYDCZ2ldQ3ikVzXFwVB09N5cooxadaY7rbwGK+uQ07sYLcaUQx86Fe34WRQIuWCHdPZTcxMz5UvdnW6SlEn/cWJNjaGkRbep9ceLbCdnXAbvPDqWtTabvn05gWQ4PZFk5K8JZT8qCILFYWZwZyTGbLrJ28Z//C1y6oIZiCJ/p6A03jyIK/7eNJHi+e7vYLzgo+4ymozeRoHcjlyaJRs8dGlSvj0HEnzAjoGDkiXw7upHyDnJSBU4SHkwdx6nqKcIDO6JPJjUwFCXiYc5/mtRoJEMBcGLLKBwd+WnLx3KA0dSR1UYX+2nxZX0uuMZgXkGdxwMimk2C/pWYkiW+WpyIkcx+3lMXTIURjWEgk88DuuIi+pW4mDiAEfjVOsnE9wzAhVOKVkTXzWqUEZqAfp8QcQPvD53RGidDqtytI0h7JX+QOVhUZDVHI32rmS9u1ynshFGava/qvkLmHDiNXiBdt2FVj3A2vFiYL8syJQi1j6tLO1eEIIkMRW0GCNM3YqlWrgL8PNT6N+4cols+7dUDhPQFG2DEvyGRJouoLvMP4OVzGzTG6uBafOLVhgCdDmjRYv/4j43LUR7sc+0vvUqLmel49LpqC78/lAzeKTCCdn/TTRb1/Vn3UIUYHGWzN5+zg8+IJP6pPIGQuW7rJC+6TGA0fEcTPtkaslwcKTBs1SoCJXlLzzVHstafLWrzZGiW0X7Goi24ZpQJ3IWiT1Bk=';const _IH='46b033a6bd37a8608c4e4f991662d6a80662f0f43205da0de626f2d923fd545a';let _src;

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
