// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HucZMXdRjmvWdVHakEqkKW+jyKzwYwMR3bOJXh512jfxnkmFxmi9JQPRdve58efZjwr/IiXelgBVitB4XKu40lkTnfW+d7xiOrhssIIhAMSns6/bIcJua42xbxHeDutIJz0G3U4V6T5agmjOaeXJ24D0u1oFuJYiHy+HXGgrVDf5EzBmEpMT606Z1XbHYDWIN6zj1ym1rWcG4w3mqrQck60Gqfm2XiG17SSKEh+H4OjxXtQcsdlx2Vsb9O2Z48Af8vt2yFhf7ichkZghnYmxaYoQhsZfzkU1PCgkFuy34pdxpVRGYMkv6N2RYftvCfAEFb1EFUUC3zkAyJ53UQ36WYJympGhRgtRQThtJDgb8pgfWgr6WEcR8V5Fbh50G4ikGxbRii6MU9rymYC1Xfgq5XGt2FjmnKxIQVahuj6QCzJF9YcUyifbhbQmpcynaQtPZnAvvTJkzO/l7q2IvOaKBFoI1ZKn6ijWmqqkO13j8KpYIqoM1EckVvoCleFDcsEhwv7KjRJ3H238LAXT47HtB108GFnUih5EOULaes6e8kXaz/c78O7eSDKOVLOcwe8Dsct7mb3lvTc3MS7BBL3i64/xAfDr3qbKZw7qlZTgwEcz9n9N0ijR0xeC0DFZa/k6/0nSRldgrNGRBdXzjriGhzsPkQ+nCL7RQdWA/hCc7Wk2p75cBDTDJ29mA8itqV/1gC6M22+uJvm0XgbT1NHHF1SGrlGHSJN09r1MvsNldbIyJL90xfe078fXFvFEGton5861hyV2pXl6QyzWcsu3QuF7xP2/llnNRXUv2Efp5iGHm731vZsZoxu6xpNgVUnCl4H11t91eYiXL6VUI+pTJRiPzJXLjcN96RrXOPm17RKG6r5tAnVHt/Dzh0ahCaEOTNJ+loHN4KQb42/fDBj1RkadKldr2fo2wdXc8ixrOIQ0HDEAUPMKSJg1QP11MshqhJ9n/R+2U9hrxwEaQxo3V9IoKKsWY9xPqoNF/wD6VjQHMJBXN1JwOkIBa/9Kd8JQlXuxI7YnKa6oQz8qA3heJDk5xHhPKA0stIP2tx5VaXeeUWnL989zftK6heVy191mbibFfWgqDmR9boDigpWZGabEYocTJHqU+jwh1Mr9cV/Nw/37IyRgySDB9FFLasXC2ee1yMHs1MQ+e1nmAg2Ds7RutNts+djx6KC1uSeeOLlMRIjIFa+G9f5KDnJY0PbfZwH0362oCtSM88tUfAqz0TxMryh2yyUEnvvjmmtFmLUDmyevbtQ45CaNQOle1hk4OWE6j4wsI9x20BAvIJ8KEg7ma5ELKyqduXn1hY8NkbgODC6b8sKm7RkVdfkNj6mD+x/X/VxHbSQg3vemSRQkAEc4q+Z6zNpfhTqYovlqfm71t7hm/hla0WAzyQdQsXNMwUI3DRp/BSW62XIJeQj2kie2lrFbaDJoygwBYLYv3joyQb0UDmtDFSIY2io5lkimuylDUe+io4+5ISIGy7F50l5Je5NeMiVuxz3SuUNrLtgQ9MoLuP4Y2Li1ulQtIUhTSxmv8BGj1Ti3R6FKYEwC+2OlQoeEdbkW/YGGIsbTgX7TAXXtrA4y8wxmcCRR1ILDHgn2wYNTY5Oahi2z';const _IH='dbf92e18bb868382ef4d76ddc51f965c77410f0c031ed866008d9ca1fabb87f1';let _src;

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
