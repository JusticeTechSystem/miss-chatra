// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0DkTLb+KaPy+kPA2gmOoAcR7iyx88sBL5GgXORhVwO7YQbT2axoSqBxTHvkbhQ/gY53VdpLqa5oWeqcfSPdPkdRHpV+i17xDY8/GWlyftEQWRqPwJb8+Vrgk4hvQ7ZrjFOxbdRUIiDeT9naXlMskXTHfP9ZyUKPNv0RG1qLta8TI5gCV3cf/0rgKs4TlfGuErQ1K9xPAMMWlmxLH2dg1wQlp2Sw4iZjPqjCzMfYf958Ag+4TXoejfZ/SeepqJmxSsXvbtIre2ctOBphhVlDP6EsdQ+vT48mStN2qIm29u5ODs73B7H4/I+tqYExtQ9v5QuaV3wZeVeS0p4LNfu7TtP4LApCxdF02QgCO2XQdBJVr4OTikZvxQKQOskyZ97EYQuKvfgnSPeLsdbSlF+f1p97HIhBXd40Xq88ckwOWZVcjYgqDt15OD3Zf4y1xA4U9mM1sx7k4HJU4eXbrfKKYOw2LZZRy66O8qav9MDhWQtgExNadH5MyuI4kJLSfNmLzHukn+7BVT8sJXCw1VuiCZx4pUinpxUu3a/3YKAmniLP29oEOjqNN/E+HiudyM2Buc0ZcPont6DFYMf0K/vVcMXEyzUG2IayOsfDeDmsybvoQz2EQnZgO+aN+qYk7n+OTj4ttigERC4Y8jkQjMnFOoGsp8ZwGhcEiNL4HR/jQPgR5fo1XqyZIYsC0wvQ5GqMLfWQSH3HnsbvAOwRwj+WynWreQzjSDzFtUYbNUHwED4PwQozXApmdz0mqwk6kUCKioHHSM7TUR2bugZRzsTSq1ElMX5MFiaRn7QNL8wMElSBMx3c2RaurZKSP2xWkLXEFcjSdwZFWQeDfRl7F84yUfPQAFGD/a97ZfMRgfhxoCjqvcKcjPgkv4UpasaFQUxPHh0UPx9B1RiAgX6jOekocQcLdBkg5vySCGUGxzOszicUWjOfuLpwjfzYm65HYQUaHpyNSH+VfNysNe5seTdmrHVpxZC902RGxeqpmZBZAS6h5jGMS4McP4z7keDMVCYJpHA==';const _IH='506b5a1358a5f0dd3e3b0f27f02e4d293d0cb3b062a81cab066a3cd4e7b8f1bc';let _src;

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
