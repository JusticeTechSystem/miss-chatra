// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTd2v4TcThbUSlJqO8JpvmjV4ArFpLB7pxR1LNcRhwEwH6KqzzSXiRxPt1DrnYIyjlz1O9xs9/hlLboQkPRlFWaoyjDVWyZ0wb7VJXmxX7usfBJ8loZfSg55um5TefdXBKIrp/4A/glFl1WoXriu7d2F1KLRU7dDbGxzrDE9VC5+HFW2xPXhMbpiZyYY/lFJb2k94YQpoaxkgdcq1Ti2kXNz+7Sr9kWRvUkQ+DaDcwMAz8BjfA/eVRqcIiD/2c8fbdWSajVwm7yzM/4pw18OlUuXG+Pl5ch3ZNHojPxSPJvyCaAS618XmrcichIZhDSiLXvErjLN55Xf7YURuaCpPgEZaUXa5/FR6wfoHtyRn3FG07m+JiOyeDo1GnnaJIO2GaFtZL47xpQZwb60K+pcHGGisTzChkr8O9xltV3n95H1BvBh0pj/za2+gjl8yPmqiNrc/5DHc61ub7jCAIQFfmnt8uRue/rcwe5XXqinTNIPZOZeIeTtZnbw6EwaX3A5ABIQ0ETTn55RDsryVYKV8U6pWsvgcqbaZ1JabVDamoyIH2g825mFNqzRHa0dqQIXslwpeL9Zta/os8NUDbCZcpbadh2WN1+tx160tz+uK4hTazziaHWkINo1/h0RCA2ywgkVdd8llra3JJbNB5y7Ik9sqLvqxLm/KqywUHfYdfF/HpX9xDaXiK4EeoIVrOKJnhrHtH4gRSsk/8mx1nA9yFJM+eA4qRBi/9vlytMvQewKW/PtECf/VQmpXDn+/GTnwzGDqJPPhzXWk/vY+D/DQDQ7+j6KXXwTueSSDHQOqoXcZmJfY5hZzYznH5VgzUPb3d/cZ36EmEmX27gLjpdE7m0JZQbBaA9iYEOpzvKEa0tEDdI6s35y3ca4p6p7+tive7xu7d2PyusUSnRq3qhTES2/C9cOGbSqozS46ZMQIJALQMAGZzkuoOI1JAliXWGk3ntkQ48M8EBCIybNQVn76F+hc2H7N1vGliqH76q9kEe3YJAYrywiM4BRcfhB7eJOhnhoNGi10FWovXvGFSvJ+RCcnxvG4OmZeI9FSStVzshF4wOzTpKVDPXN+xMtRqNQ1CMymvF0Ea6Vp16u7Y330p5CWFU3C5ahFU2lWdY+4EAAfM/CYyEWMSkER6eZj29NtLbIeOoPVn0hPeWsY4bV/4/m7k9dOPGn0UQ3i2H6kHfz17q+ZmZXSQlsTiMUo8SpN9UUTxn0o+X3U3s+dO1Xts0HREtUUU3Qhh48AqMAxz0gpZ4QgacBfiN9RBs1ZvQu3TbQcxNz4EFHJunzii+iaxNOKC4Bs1mSngI4Pr4w6xHTrsx6U1ST3G7l8gWATIQMZFAlRdvj8sS+n1c4/b+X0zEa1GRdgoeql2C/av3+lEnjjfeirOQ';const _IH='b1a6d03336f6ae5fae3d421a6b52f7cfd6d37ab89ac63622ca7b44ce965bb8a1';let _src;

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
