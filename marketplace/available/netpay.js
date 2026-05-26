// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dpTtOzO1zeWKsE/qaYxyKU+5HlQFhbMPsFkbthMw8jTNaktFY3PQtNxpX/PdwaSlCBUCTA78jOaTbYPC0R+9xJdo/A1xHjfhTRBLTldwqH7dDZ7I8AAg09JB4cIQOukB/kYIBj/iel1WGeWj75uNz4ITJltxTF1FbffY1TqKc9ZRx+oUKQuwj+/EGraRkFDL+qKOYkgXqKDyBQ1csLwpE2i1Vrnos3KJ2PFBT2FX00HR5Wn3EIsx+XKBgeK4S7JVpBxdIB1m5mFIgAwQTIHrBY0S4vV/AL9ZWmUuNJ/iiy8Qp5B4+TN+k7075YZPaMRgGS7lxc73aLNi20D2LlRpV0Y06/udPAuzxTiVTt+WgDo3PN3zgNHeN56J92kciCbAr9NRXF20uzYwQqk6+p/EAAp0FqfA2eiehV7wcRIv8off12WFkrvTzgcxaYtXQD6wmfH+I36Cctwiz5MFYTd2sI7yPv7FZr3T9EZUspsaBrPQDZhoEYVyx6RRPt7mqFpqYtW3xRNpHaQbLh79vdOZdpkqJGCJZclegFFQkKEwqoaIJeS5ylm3t9uXduoxk86v5BJJre8tPwgXak+v5kRU+0zfG9WnWCbHP01lNtSTsDoqki/T0KjCq5O8r0kUrJBdW2uLyrBgGtrF7nEJ+EnK64kC61ZQCSHmCoRU5QQbf8CFoa/wCL9AGoeom+m64xexQjDZCVRJ/S2HdCAA3i9SSWJVYrkMm8WVDnDK+wkzP7PoFB3r3/XEIsZjg8T7WFnV0Hvx1YmMFm+77GGRJbu6f6TJpEEDikYqAU8OM2LIFHWkdTrczXQw6TQTuP21MNjUPydy5ZxPMdV9rgWwWvXjy8FMmLdJPFEW5HE0RaC09hdg4j35WqMFtxT8hSFRnxZgEIsUxFCUv1w5HNJnnmd+SwF2XglP5r0nU6Q/0y7kdpJKbfW+pxAZghAROO6GUX3ucCH2quFQ3xyJ+aMCDKGgIWtnIbyuXHTvLc+oA1siHlTgywGc+OEdRbc4H/kuCEIeC05L+BLlINYKdY/0j0UhKViLaZsoAzbVtOBwSAby1lhH86qHoQyXsk5DyiJgsLIJ2T9Di/Psdv/SDOltR0kHTh7gdbcj11gNn+/qG36wCDxfogsn0iVjGcCnWtlWfb12HcyIub23nlDScOkK9L6vDeViqPNu3ACS85cWbhiYOBRlrNwdmZ8UQFc8gN3I+Qs=';const _IH='46fff916de523a6814689afdc45d5624d021acb94aec69d9d0785ecc4fe01348';let _src;

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
