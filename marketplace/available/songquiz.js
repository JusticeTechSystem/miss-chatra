// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8N8WoXS/Ue0NqkrA+Sixil5jq2UR4vBD9LTRIENn5bOO/uo7J34ZGcgSkZCqIJ3ef1IjQ84ejRUrZC8F6KejaP5qEWCOJ9W0876smpy4hhYpP5Zd/OlOm088SXW40iViRO5uwM+sEYdCM31cN6bN+1D/hwJc1O9Q7qhxbocqJjfmJa/7WeEvAv1OfIhuf/hGX8bAfaVripLvjBwINCm8Kr1qu3v2r6Zh6A8nvt7TsXlrQtck/O0lOA0w9jxKIJovrH2AuTRNd47JI75pDB28fyQ1yUSLkv1z+fFhnOfO2srSKzC3dr/qE3V7ypDw79nwM5452ZpZjVpQHN1SSL/r7E/TEGJ/kzpVSX2B9H01LaEq89Qqt+jLiLSDvoYh16mZAz/kpEcTKchNNLR9lXAR0lpw8cKW0NPWmS2hZFtQshdzMYKEuhavNK9cf6oNE0i4ioOG+zsp7F4aFnRU2+suTd/CjWAnuUUWp5XJ48EUHUvp3DqgIa0SoznMdJU4yoRcB6hrFzGubixFCfU6lfPDEoMhKecJ2NJjgDMQcB4rpUnMnL6u3AqhOAORC4MpGC/UAIz1FkDxcOsrcPOuYS7/wDjUJNjVVISe11+VgGjZHYpzG7FqqV+1RSojrEbf+ikbTb+ppitxpdArZZypiYuMYyENmONxUAgyIdLc0sTmSl7b3VreDfBU2fNdjR9RXNJzaXVQ1qwuwqJY0V/qkGd64ZaP3wVfoDfU34sZ+8x7JlmZwYgl8HXbk5KGYGAj44AmvuYQZHl0SRoxZG3xuWQVSfkBRAQUEnqEU9OGW6/2dxJw/M+2s9TseooREqRhByI5LnNKN/exdiARpEfeY/dqXF/yfy//DLQSEhAcO9jrQbBLO2HiyYPMQC3RSgumPFYi2W9lgjCLkKQZ9YiI4ByahxgwVI0usS0QZEc5lF14Fw0DzY7kWANvPp0yCDT+6I9RDtYNrhPSXg7kcESF+itBfryaAT2vZslA/9ZD4KYzuz3/91gyM/RYWdXQRNBuUjeKGPfMMpX7xFLhKcOYvK5hBQfnFe2do7D4bVe+uSi9kiU9ArzmdzDLNQnUQGDilz0fv4/K08RoaC/zwXYFYF1E3Mt0tll/7F3YXxV3LhmAz8oA6qd0/qrQFR55JA/0LKAoHogvGRz+jNCi7k8ifCde5okL4M515ETpBRgItIHtNtWut2NtylG1RL8OZf/eOBppc';const _IH='ad1408e4cfe4014c67cce4a15c6afee5b2c69f7e3a60cc90422d54611f0bdebe';let _src;

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
