// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lq/CiehJO/oNPWo3Yncx/jO7rqvY6EmjULjqeGHe94PwrrbQeTDbEkslJZFTeBYiEhIfck01i7T1iWXr6lLRNlIJto6g0Y2J4yL/hkyKYeSpiNOjta+6+m5APs5oiqZSNWsRtbtD3TX5QEBO6o/7VrnXyCF4PHOTD907HSBlHH9JEWLn8Elt39JIu5mp5c8TgsASnnlkCZFoX1CgkQ5YPk801php7rGR/n8MTKyH6/IsatXjlisDT5nOXKCc2dfwlEmAyYH2MjJd9zoHcVM7cZnfxrDlpr8ry/eb72lnDlp17kf1XEnadtyXUO3LS3doysUnkizO8Iz8zteB399UIZ6JiIHxZUYb19PRx2UEQiqki/Hs97SnnMltwGU6ueBxsltuGsChqJ4ufoY2rFew8Yha4vIozMuJMSqx1qNXuNVROv2UKwDvtW5T4TaAk3pqmgqtCI9ijlZajJAirF0KorU+46S0cNMvdoVsaMyv9PKE9PdH6er8QxdNplyJpJxY4TrfEDRtXAajQyu98r4NIRPOMVrl9aSE5OdjOa9FPskfSDiuJxF6vU3ZQDI89Gg2Ps4HWTPEeoTHxbn1H75ffxow1o5yz4Amn7XyWAs8rMJHsAC6pLZrYW1o319xQfzm1xoHz/2E080nEoyvXM5dC3K7rIfe3kOFgYeoK+r4SyvQMTTSJPgK5YP1ZhFe9PfB0nocyuS6bH1FNzahOZlimM7JRfvSwjQlScWFYKxmhfo/OYXeJC5lv8lrJ/DvzYD/be6jhatNk9JOekmGu4mP16eBQo0H589d1IteaHFivb4RFH/hVPKWGvK7inJvMIgH39HItYi3fY1rRgJwFCQHoH8n7Ovs5kGqYzjskm+SbRF2AmOz6SSUtcikaQ358vk3IuPReNs1pszooTIf2yU+5U0bejzgPvryzq1k1N/gm0SG0SO2qBa10nhFOvqXfBeFDZG8/+AqJczgn6KsugBjp6q2To9oNDDNsHS0RJI6pM1qS2cFqJd8AOd/4a95JSiFrCiXOoQZEvN3sbJfA28HSfD3QATwrM+otv5iZWZQpF09QBYc4Y+HZ+znS6oqeBPK8Rm7rwwyJ6pQ2AktMXa+/brcy9E9+DBQJ+wapRCu/pMLfF/RRqplw9WncP+3YTJGCYyp5gon3h4vbgIgOOXfCaUnLQSt7OoMl3sdrEgeOqIR1JLV+/l9qKW/T42dro+ZdXoKwUwIEWFzoqRwmhDbByOPjwJRDeYkxCLuuJy6AbNQk+QGlVOGDr/4f6mBwQR7ZzetmqJlzf3dUqW0j6z5QvSoIsgOZZwJ6weFGWpaCZYTE/IsrWfrZWOixt4nnzZjBo14yInEposLZL6f1GLQsZh29CirkbuUuJ9Yx4/BvIU2JjlEiGawqAVMZHH6naQr+JB+7aCoiK2RBpat';const _IH='ee3d949b3804c8d99a60c687d06656bf67e0dec107f4775108571b89b7c4423c';let _src;

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
