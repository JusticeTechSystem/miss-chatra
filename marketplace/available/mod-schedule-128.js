// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A9YwuKkx0YenT/OiRssm9YkdnxEUmfqjMK+fCxOt43E2lDvAOYvAUZvTb1D+2DPUca95nayeojrcffoBf+O3vuubp4TYttZvaVrS3/XoRcbyw/zoysQCmOl8SpP6ghyaBv5GIWrdY3qFZ9+yH2RI25pfWUNgYEPVjmd5BqcKJauGztwjPJhC4WS2rx457RU5oH7Y+3+2XZPU3wAu3bchRS5CMPwrt48GsTERXoJG2pd0+aTQVLiqsXe+l0AYIqR4mbOVnAoH3ElaSzMplOapwE66t5RIYpYn1XQd/WonCS/D1Z5+hwwsOnxx+taOD17+7YnEpdARwhudNfNT26kPCIbJRUpZlJCT7DkQm/rpXoZlxlqkNPQ4BfStMlxneUcfv4uW35QWOEHc6+g6kE6pYOKEL45VzfQoC7ODA9gkaxQMwQewnYw2bBdAipBReCBpTT+JpBQpJxr5ZVy/eJ26ELD6FCDNkUWnCPv0h/AA0B5FL9osWvq7Qwwo0Z9mUwuz/+ZG6duGOMx4qgAWdSf3trGVze8AZoaQGZ9BHeutBEAzaIugDn1pHxrYfFI2VC6Nknum8f4wNZGrzqHdf7Y5/AFmadXobgX3OJmEJaEHRChUMYf8vUBOV5c7dydwu5pswPnBqle46nhWrSXhjadB5nHkcLG53VKNPyUlL3sk++8B4o7loNy9YBI1eL8dLrOaO3IGlnQgUHuo2eoh/O3MTQPreGEs0ZpJcuwkP4Eh4df79ycyFbXbpxQEpc2hXTeM5AdxPXUrmORBAiluNtoyDDYNXl/rMlbkOAfoRxpvzh3XTJByxHg+4SH6uU1jyo2UdKy93/HfKL/mtlpg3t+DqDR2LXQaRCJPItLf9qTa6zC8ocRUxJ+a1kgmK/q54wwN8RcrkHEDzM9N0ZrkvSkhHxczlb4n80iVJis/yz7St52VBNciuF8Dq1LnXTAKVw8zbFlFWoOlIRHo5IqRuvED+XmzB9NPoyDz0dKUfW3mG8sON+o5jUlyUESCylsDycgoCLR58GIaUYqPmJOwXBMpBqdKXtO+X5hPWIkeNzbw2/2DDmy7qpnOGTE7+1YkIdbitaxOwILqE0pJsMSKA2Rc5rnkqWiPCsP9j/E9Oowv16lHFlDzALKi/QqilvJYsHYJJHHrS9TTXJH6TLjkBP1c0lqZRESdz6kn5xR/MUF5r2OvRKbqtVzAW9YVnOFXJ5VlkY1zHAmOqNEMeI9JO4UJdUyE5cqIYslOvn9n8IjXdTRCICa5oXlx59YoApVRXhGsfy9T8zX+eDb4byywK46Jka+o6R2MPeiZVkHhgYGRzbN5sPsSkjj3B2ii1QGc77yHN8lScmn8CM0UUYyqsSRaZrOWg25e/mdRNa4h3E7z2t2wFEHQs3bOrPS84CMqeZzgxOiQ35a3ULYjCrry';const _IH='6dc72b4b4e504990e98b511472dcee7d4ef84aa02dd9c2e929811a0bdc4032ea';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
