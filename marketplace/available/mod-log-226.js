// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0fomFk0TC4DFkTqyqYdQqzIfbVp3bZFyUW1Q6T6hKHDE+o4jdWDAojVNcZzRlCU3mSj51erZo46An6y1O8lNT81IFJ1iIIyjulCfuXf7Y3uMD0U+LkYEgIaT/Us8Ga5UtFjowRv08uggaBDKk43Grt7npbKYKbWGoqZXUJ1JxsB2rfGv/UkT1z/mtADMs1k1c7djOMZI1L8LJL5zKbCtW17Hq8DcmvO5+GkqzZJvK4PvigEgm8GNf4pOu4ilxaoeWbNGHJhW9sE882ZHe+lqjSmUhlmY1gXhGIuvffGIBveU95vNOy7bT9sIIHuHx1nsn3JoIARiD9sWmVoDO0k8bPasfVoOF3vcgHGmsn8FhOctSQdrl2rfiRYRreMlez84QMGSPHvCZLu4AS9DQsF5xF748F8sBtx2aJg6CPN08K1iHiplt+uJkPR2HatJnNIAJIbdBuhwFjkvggg9zwGqpE2YD6w4lGzc6mY0XbHYPNT11yB5QxM1o6RcCiP/nI6m1fnxLxhkMmXNoHS+RNmrsRJrhZ2072OvbAcE2ALhWRdS9KEJz2uS04T1xdPU+nydv9ofglAZPOQozMnynuTNVIvtHBSWK59+tDMjRbI1qSX80my8IXoBQy0QvmVL/k0XaUhlsxI0kVUIq5rmtLSjoElNDvib8GWtOXE8GMCxKvkRq1X3Cbov32qgnP47EyBL9FW8h4nT4sgvlryP1Fiq1qHp9ZaOaanihKBXs7dtOtbBjaGAk8R4km1s06BjsHo+52x/AORrBUJgAPvAt6iKbom+tU6XT5FY1EYozGxfl5Rr09eDoUCriaowduqXktGxQYtMUuhKUT9Li3m0nJCNiWEIxDKYZJi1UKA43HdwzW3AJgdzaBv3toTl/U0zYq8bhHhDzVfRZfLBnzFsaySWp+ZV1+5eDKuvySwouqHaD0FkOFSPlwWRH9Wm7N+IVxAhA39CaC3ZlFPxwXZ6pENoiiF+TcdGZ3TZsWjWoxc2I+zNyXLactF47ZCEQTWaWZx6Weo5SCgJkqplKPJ0VfOa5O33RcM5HY6LrrlxnIWkM/gJ/YJQMabVaMs/3+KphMdRkNEy2Q4sr2RB9JwoJZPYZHQWw5P98r97CmU5MUwtguhQhTLNpJ3vkOmq07PKHqbbAXdlLCZKzIw0T37SM5q/3SnD7YZnJ25oNzVEOj7zHrK8bC0By8pJ8QZWYwXD3cIv3d6h3FGKfKDSnCtwIXxQ9eOc5gdl1yD7qnGIrBLwZldiHxqJPwmVJpIyPeaH4l3T6ooos58fz7QB1HUohSSIn6nne0kKJAfhPM9DzcJUlFS1y0A+kbGmnfrPU8O3JPck3f3shoRejNPm2Q==';const _IH='8e161cbeb8e4f70c8499c3a129070d999a60c1e434fcf07a8444bf54fdb1e969';let _src;

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
