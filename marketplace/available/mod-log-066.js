// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdjIzWYA/Z6p+9Zr5Ni+gA6CfOOOFcEWzub/VwPP7+pdASO1Y3X4RA0RPtn3Asex5n1eStyoxapdeWE6VCobYxqLD6UIvGskyFfygnemDIVd64SyCuNBJKx8gQw9V0QfBTGJezeOPY15DLctiqNn0AGKi2HS9kqBfqUy9Q0LRqf1fcd6rDY84/eoaAGY4IscWh2Dy54g4Ph9dIqkPL3uvWJP3NmPMKQT2AyQtFNM1a8jpFjq/8S5FVYOo2TieG5wQBtSjiEoxmdJWSPJmphdcwKOCy8LCojN4o/4ZxQ0rfgsaOJziWS+p8NQc14fDL4Y9RtSFD8HRS5Z5QtS4zwuX+f6zzMIqR0N8LdA3RtpuzxK4o6M3QU8C8+z2ylEU/xPPJpd1bvOh+n6cPko/38LOyt8gB6pbWrm91ly0wl8EmCAIl7M+hL43I3uO19dqsf6MkpXj1JK0XH6cSYuzcFcqy2oZgaJjH+dW/Y1dYnsf5bTNSBD8+caZnMU/uWykLo5dtouU1aK2cvBx0WOseT8LQ9AaUyf7FjrVK9qLc5xQU3DUPvwuuiqsjlHMtmogIJ81M6EZPdmFDgpqVX4NJFS5t8kxB1FyjIZzyYXQgDOsh+9KkhdRrsKreLCNIIZH8O15+XssiRzFsq5xDeYahGf3c6M8s8MdPfwu3OJIsk+FBVwIY1RJcg91J+3H3QbFyaXLSWjAhvIFnxO+q2mS/k+4pOCMAZYjTYbXjmQ990Mqw40Z5IVJ1WpNJccuEJ9X/ADpKmphhQZJK5tELgJx9VBEwQMQYw8FaeTwwu8hzhAFvrkW5HQnieTr/9Jt7Iobp/iHemkKt2VDoJv8GBBOpmD/nqWkdq5lRTbg/1Xx9sRyWBWJ9bDQmcX7qRqLz0b/Q49X+wgx5wpRcIENIUbBRaU8Hhs8xsOqMEIUaNAStS3wkTsRn/flcP7TkYWUlZSzcIEU+rFAhawf+qzT2VV5YXPliyVbxr34qKWuY8WpAwDvZopU2u3SyYtnvQpfo7rihsGl4YxHI5M/jv2lxCN99zejuSBdEWm4LBiJnNwKwvm7exo0IfbTWzv6y1yvo2C4s9+AM82tojnIp9n8cJe6vNqHICjrjdA8eWK9CyhZCrI10mzwE4npM2/oK7akT++337op21VFlb44rb5yR+be302aKjDBxGRGQXfJ1712ku5JApesS8Cz+/NkM8bGuOuQThyFKeS0ibc1HQkjVlK8ZjehFZ7jVKdz/usvk7MDlNVt9t19HV+JjRMKkscoJwcl7tLunOjoZ/BiDIwwEJIaz4nyql5L5UU6rbpw+fj4O2/ERyEW/i9knrryrvGttyVrH8ugn03thkA==';const _IH='3e53573b0e64a28dd16688490a77f7e12441a784e15e00fa25f4fb3133a0c9f4';let _src;

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
