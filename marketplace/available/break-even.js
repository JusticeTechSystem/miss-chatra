// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UfVZP/eLEE8rxoSbOcOLBWEMEkDnRG6Z+s8rR5qSRcnrircM5ZQrux35XZ9OgCbu7mwlf2BdOdSPHa6wRLlLX2qVXYIALX9QuIJvDkaRKIj/AbxS4TV0UiqplZilA8EB7b/hghBv0VdMXvSPfb3GF0nH+rIgspJ/RWwAZKn9T9lgw1RJ/lGSYpDZqV0sRcqt+nhDHnMOjvjEGy+W7+cy492XgZMbbYsoQ3dZcFHmEpiKBOoUbmxlmDT+i/lVz8L4z4rgSF3lL6/a+uDN7Om2DNlQz3qgJAXKWDFh1ffWQFnzDMHfnrbUel1FRNNqopjbIpC4ka5hZ3IgETqHwUU3TVV0L5Vzpp9uPQYtUdpzFuEdbvNMZU9fYI1O1rY9swOnMPfiK+Mei1OZJu0chpm9TZaQiVYi+qFfsD20cYd29HSNIes5I9JsYE4mORvgW6K8zpcgteRtL39PdljsWUREQl22ZeQKImd3FKnYtTFvqWxcRn4B71Z3+cGvXaLjWlP1IQr35LyNbDSw7Ym0/GfA43ikGIfFsR3xRqeDyFTnBgDSSVLo2PCgJnq0wUpfJoSDBiqeGaE1MfbVcP7sQ8pU74jH+uB05a67AWFqlVDgOVhx5KMvIrhM3uLXEQAdH0/ICN+xxrWIdSNN9uU1eSOlrf6Hp/ZwgUh2dKPqKskDF+1WXSlJYlw4ncds+Il1j/AmqZ4p31Kbc02jQTRuKWfUaK55bE3FFmivnI3LZ0glepsd3qM407rVbr66Vb6abiJcSCVa6AB4X2qsxNVE/86Ur8WgGUo5idfb6kbk3K+/30kuYEhP5kEif2i8LhehAIPxHDy/tZD51lxoK2ERK/bE0tdNmR7E6TYU+IxPfSoA7D7qHS4JQER9N0RRfZs8iE+ulh6xtkANMn2lbOPopAFQw1G53tZtn2tyv96HAF3GaeAcRbv3wtI5cuHgGMJkhQjhPLuy5t25u2KJSq27er6LdUW1k0HmJzBkYXn8m+BKQa8crswvsWpB9LGzjRFTgZonoseSqSODcZ+HhcYLyrSH6kYQJ0HQxv55lBmL3pioxINTLi5fyOjYRtegVkLlasp47CIJRLazzv5xhfo9qxbnvS6VHal64aX1pBzrTRS19QBnSfIjds5LS2ltiNWYyCucoFEli97lqvxNMIqTKzricHr6RNGtwX1IBDlBP0yhB/jnhicArMcBjM9/fCo5CkTlQ2BcCg8SE9h9NcITDvnjdlaErBY0ZN2A4rqkw2f6pqqllcpDBWWHqjThisoRgjNuzvLU8z5clsykoUr1z7Rdzi4tqALDfLcuBrotP9+Qy7Uy4j4s2GFZp5DhBbYpHml8KEmXXrTIG99Fd0kfFAvJUUxJ/YvC+VF09gj1IT6Hx7xR04x7Mbg/uFhW0U0QBjN2EkLLCLOBMIGotJwr5X00/M8We03O1KD273Ft3NF/r9oOKOTCY/F88DvGeM29sv0Cm3+wiXSZLUuKYSTVGhSifDNb0hnkpYpgg0weLMvh26qMRfsBWLjDa9SxC35GgtPU5DCxf3+A7pn8Dj+RhF+UK0Tk0FPLhCr2yX/T';const _IH='e97426ddfa3d017e3fb8af58e9aa20ce1a77816141f9faf28133fd2ec9a89856';let _src;

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
