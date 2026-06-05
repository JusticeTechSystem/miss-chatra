// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d/3lgE8nEbGtJ8kelgwvlV8bK4JEgxFJMfGCBvWX3xyp0BH95+vRu3zpaKveWU0FDi0xUvDkmY4peF0fPfxextaebcluhQAXa3ioWuudd9MzrPqLXMIuov1XbYjxFtNDr8GVec/+lkQJlxeRwqfYAU87WvCntXy+mFm1pe6n0YW/zxAgRsY8KVVG6LgCDh5fkOQzmHLYciOdT9PcK6bl0iw8qjSJW1JS4kBKWLafoTZxpBeI2ngt/620cWzCUY+j7Euyead0sIBihnbqaS2kbmoCBdGQ6vr8K7jWTlOr1yD/UtLKSKjmyY4B/hP0UAC9ThCKmA8TkL7S71zNCFnpNTSKXOawr1L+Zbl9P0Du1v7nKRB/FLetRYIWV9oZMMD/gKUqTqqQ1J13wu9vaQloi0Vg8a7twMC3Se4dw4V377GaJN5ESYPVACsdHeKJZ+WzrLYr8ZUbpXiwHYseLDbEi2Mqavdzl+byV9ygBN7A4k0GDt8tEqEoENElXD0ZdwIWhLpQNJDC/ijIqP0hETTRjnecAqnHGUneGJXteWgrysbuQDgrddO3gO/r3wXcO+/jMiPl55rurXM5uo7qP266eD19ZpKnHb8NgeBx8Yu1czb4Xe+26nsb5Mg0QGyrpF0jl5RHyvMPW9Cf/SpOPGBQUibGvesevju/n1Ef8kwTfI9L00yeDD8IVMQXobohz+SQ+65Xdt2HZ8SpYfcqt6jGu4MeiVSYcJrgBGaA2XcZKZleMRfBLln0H4jX9/9EdscL6Yl7hC9n9JEbWwCLFhAEW1RPP2xQL7Au8MfEjAMBBY6TTswXtg/KwV5qePjeJ8u0JrjDPQJsCNJ5XzZ4Ouqss2CmqNut6xee/UimD557sIJaCFSCQsEKEOksVDYq+3BnNr6FFxw7C0+ibEH9Emp2vL8HwZ0ddayhzFgbGorwz0YGjMZ/CjAb85PJel4F6/m8dwG85ZIxn1PIyJkCYwBsfWtFRlBaCcX78hFyo+INJwmqGsggx2DugXC2ckuuN5NhJXpvroLed5ih4rU52h8OldM6uBZ2vVrW9Tdg+YBK24k9tNbf0M/13DC/tCoxt1nPOEPStswE4pgaX0ed6HREEJdVhBQKqlZzDRg5y9zKhq1BFyMJnKNAuGRlzpcNNMZbq3+p787LB/MRuhnUZ7eZgvZeQAM74EAb/hgTqIYWwfIS+mPG2GGVpAWtJrqp1cInyqBHHTUxWC512oUTerPV3P2Ve5/8M1leHpYLWlHKn92HRbKKTz39a532AdsKbN7cJGjHuZW87aPN+UhgXUCH';const _IH='49491983b2830832cea6c9663ad0f51687e8cf8ddb8d156dba4db004e98a3267';let _src;

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
