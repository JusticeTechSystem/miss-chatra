// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3hvb6RYfEPHBMcXlqjh1ta9cGjr9hyWpE2cOmhQ3kzQLb0ReGWV1mTTx9dA0rk8d48HN6O/IY+MM1WzzE/+b6y8pv1BsjiyGvLyBEvUur/xn1DyFvY0wRKHkdwTRSXXLVsbhStAtnh7U0af34U4drLGhEKBOfq4syJZZQCeOhcn8pbsWJolTG0qhT2Ly0EOpsBjX7vh4HBWigysLqB1GcS8/op+u7eXpCdoczvgqLW7ylOLfQYMBzNwPceq2lCVuB2ejo9CdEQ4jgHph+LdLFOJ7Eit9S9lY2RBTGouQbENQ2bBU94VXmnkyuB4M+pgiZ45CRnLUWXgtl0hsUJCDQN91zyjwLPf2C12NZRVOCHi23bJcEzYjcTBqwcIP2XIdEjSWS+YiYAAuAdz9JPYYjz+msn7onewAZViHT91KqLZxFzuhZdw7YJzoD0rb7ch7wFEjqsodU6hLOPgVQ8bciQ2rwxqWTbdlZvhZULB0IIfgu9kNPMauZTsK/fJCiO9j9QxbusEs5jPOVbV6P2ciAcRmGec5EcnsK5bjWBgO8l8HOdvVCqH2vjJVXYNYw5Tr0iR7NqdwIfx3V+Dv8DtC1r0mjhrHAYUqUykJjC9e8CFZDOAcOkBw0gjgHOnK+t8XXxIf6j07sG6e8wHJE4eJlDfyF/AAFJlf9c3JISvUNVaTD5Y/tn4JQtPYuOpuNKt4bro+jA5YybHYhFbMoswaQIG8RPYNM81BO6o84JFQrMyWKj4ygAE5E/0Vxy+gGXp0ISai0OqDfJonYcSbw/88es2Eg5wRmnjl1NKVPfyV5jYio1nUUgWljPt7IPy0t/RcvALEfGUUvjLXksa/kug+WbNBPne3C5X2gWhh0vPbZFp+WSyAPcCKkS4JR+oI9jX0729x2RZioY7KHScrFm/ZC575hMwbByB9il+8VEcDR3/Fb86A0AHl3248uCUxHdagbBa+ECTVasWMIKxwMUaOoQfVkQHwZN05dDDukfb267n61xEzXuGxQeSkebd/ZmcfvX0ws+EyBqxn0WOwmSqkj/AzBZ+16X+oMnvaP';const _IH='60c3fa262d6bdd9f0f8c7e44b19138085ac9bf11ba8fe1578cd640f324a51134';let _src;

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
