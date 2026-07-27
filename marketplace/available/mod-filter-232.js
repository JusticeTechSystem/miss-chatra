// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRssQ8CpSbPz9WatXY5/NLOIsSUjmWC/gCIg5lWqZ7XjVgtgxmML6He20y3mNAHN+YxOkHlcfMX8dpc9Am4wPEiDllUW9Zf8OWtmZJ66NkpsLGBeeB8AguvUoMjdg+m4z965kTZyA9Dhi8R+oL6+UjaW/S0BbyeRRZatq3SP5vs14mrpqY2/ZClQ8NbVitgC72dG4oJitmnn0UfqSrflyL0CmNrVksWIb77Yh3P4dDRq0HZVlX/I9WnEKg2HTZXwTpCbSbLCzDbIEK/9gjYQRhX0BEImNVOQRSoh2iic5aZNlxXM1WfjCOM85FWT+MvHukizeWJiK1xDACAHeIi3hr0VXFGcGc/9UYiXzWn2CxPksQ6U0XyLv2cD852lXRiHCRtf1nE+eG1f6+1w76HxO4WhT8+OEmD1EGfpcr20nOXdhZ+Kt5Ex/dyMNDCD8+j14mSu3nhG/UUrjitHf/EUAb1n9x5q8u5VvmUoE6qKyb6iDYczcrA5KIYLTDRuuf9yNn5ic6nIz2DgJbPYxtltBstZhKuC152QogmXxOvCITgDVKeaVO9Z8ZgT3I1xBr/62gImoXGdBa0wVe6DM0OtPxTjhTZW3c3AFZkAXbyHCYS76qX5seCuPDbgcrUJsZZRbTX5jPhI0Re7L432FO+ui3XNQEcaI3h4agDCyLT3JeJX1deNT1FGb0RguQ9n+4bAAY8+FjBZtSNl3Ff6z9x3vLN6RtLScDvW0y3tbIdZ2QDDlcQgxWOZ74s24cOdsTcEa/zGWLCn8h6v+GB8zaGkjaO2Nv3exwd4uWnUbaCv9ibmEItmh51zZBYxD9G+44VxWlTni5jbJn47Gym1Fy9OJZJeNbaIBo+eSXgrFjkzHNX+enetaR2gENwNe3+GqhnVl+FD9I9vCM/MiZmibSgajSLEYqJAzrwkV/rcRbW+cU6so68YtVP0Z88BTVNB99m1sTmYz/msumeD6tSFWej3DOacwhnbpyjpnPnZjP49OneceNNxG4TJICbylNTaU4E2Ax2Z+1N5ZGfmqjxPbA6vwAe9THP0q7JXMk4wbXa+IsJ46CwCQvKOO5l30g89D7/7IFezLN+B9oxKAgRgzH6qt0EYznzfkAJLxpPvv61a5yodF8kIhZHRWjn3TpYhRPltFhM2l1NK5vimQj6f6H7H62I4oBUGvWbzxiCDwj8WjMhW+LcRJcofWBR9ihCOeAwlT53zP/oX/0JiZz7jDv72lfU/m1dbdEzKOfYE7RuFg03DgbD5ObN1zFFXWBq/eSPHGqCnO+2VRG+9ne/y2IOGdjwfb670xrKv+uBiHFwQK3xrkM1fBbUHaB86DMFoSVDm4X0nt3fwItxsnnE146pQUe5W2ok1sQLeR4hkDX1eouywA52sH6Qc0NN';const _IH='b5f09b5f8fe2c0311b9e524cfdc1c9a58d52acbc94ab72b73093031d3622af99';let _src;

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
