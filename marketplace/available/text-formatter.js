// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bVFNzpdEy1/w7dYn6kWyBqyibGAZS9Z1Mj2GVCq0H6ZPCjiwHpvuYPWpqnSSBmZFHhlJERrGmX0BzxaRIaLXRx8VR7lfxDOeZ83ulqUhQhvpXRD2SwJLbIBPS1AhP3L/SvqILthCxIep8yZHnMjJWzFjvRoP2as8CVfiTRKnq/hAkmvYBQEaciLlzbLlgVoJjb/s7tkQRabgBLzsjOUwk3aYa9D+nMS6rEgiKI+PHp5qUf3HwwNlW1mYxinC4l6LCcFuEyWOlZUKfmN2GYf0UwVprH60PELyvbOUTcl9jtPivIjCTHCuevslvglg6x7WFVH7DQPzWeEAgBTRulNWjtDZwrhfAOZURernCrICWwRcnji8wkvAlmkk47TspvA/pWmrNFcOuKHN15QSQkWHqneiZdZCwriL1GvAksajacEM5hlxhAmraxB5NbeoDhuJ0QvOciwclSb9x7kjSXnaKC/nmQw24mbuzQWxMXHq+Sc5U9QglP0h3phPpwXBCBV2DN+nYmEU7CdIPSiJV9Dacbn74crWDLPwOq8i2iKJVe5QUUa+znkG4spzPY/VCyxh0whIyQLVJ+XHOfBZ4J/Rs1jkbeIHkhCUQJRBn4RehMYGiNBPNv82zhoie59QvSbNUSRe5coQ2X8LXnlACE+IS0Q+G6n4zoQ6QA9dDAk52WZkdyAX+buwqfvpLuINy5R2qfuC+1VWSwcy6DheEL6eXWjFnRev/GK5l3oGNX4SIDSTsqH4908IROYU/FhbceJPx4SxlCf+fbJvJI7P6i5Uh6nS0NDPiHXTb+JKBgeXw/gmycGQoewirOiB/ngX7gkaHxtK4EREpPQjaJ9d7kZ03uS5KYLhgsgZmmbdOo9WXeb2EunkYAsvNnS00vfhui4ybmPMWXDawVepNErFghb4st34Q4qmtpCp1KIIbyIuUJ4IZET4Ja9uqezlTcWniDGh7M936cGm04UVUHz5hiJMdwdE/cbaUOIz1T4S1EuZpYYy3z0DeCmVDeXX70BY8SosWr5AtlpPjqnl0bGW5TAb8ciHOyLZ48UIDNAS5+aBxzx+eD4QjzwWitwi1roZaSFDi7Jy1D3OEBV0iL46EY56flmt62oKy7qCESfRS5bwrxQSAZ+FBan8y/JbN2d/Gxkq1YFQjxIjFA6OkRXa8mZJpjytWj1I5ezVX22i299GFU2uUIW4k3p8besQ/CzHzT22uqzrjlS7kEAerttHOEpj6JUe2Kd1HfnMRvZg8UT1JBgBUkdzNB3tZrNL6yJzKIUYGeHEhnVfK4nWgFFfjHlcgvGjzadjYL/Owj1oeEUeUODv4nRRFG+f/H5WwCbWdZdZH4XzAdb5E9hCkcbp/wwfsd4Fz4Tdu4aWpJuATKBasvoUrn1kHG7Wu2mNuDIhCYhqrwrIdJUadt8uvL39EOHX9MQjVNO3bD9mXkBFxbmqsjokX1JpSd8lTEb1z4HrarTg7GVMhCNgG6AA6cevBSFqAycidpvw68xM6ufIjxTf1Ne1SchGTjd8NM6N03uiN5tFNuehOFCMtY6ln0MPa4Ui6N6JiEJSHaPqquy7e08DqwB5osg6v982X0k/RMWDBdHnrxtsexoZyz0QqSsxHdIkBzoxjsSbPG9j7pNc6hwi0UUSplILMp6gRDiMzQsGvG//g5PqJbvi';const _IH='4d54e279f1d0d70af71e00b197f5b3d3dd5e9ac442966c30a61072c913f03430';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
