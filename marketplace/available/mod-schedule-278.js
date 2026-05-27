// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mbtbQY3Vnj6EAAjSweoUEj7ID/pMaG40/bcfMa07FrRWwRyRlRG8xXG3JslY1CL2GCs4qev+Laz5t/oUnNudAZ3bRHyR4ylIxeqnAMim9KH5maj0V2A9YvjgZomT8JNnEVnsY/m6lgDhwc4GackZ8+q3Jfxb9dcazQs0mcJmOtPol8x1ueOAhQkqc2/yYrttNYRqdCXAlHRAthWeykAt3bw7gi3hiV/SeXVPPpIWWQ45zwsKwPIse6W+cGlVcd2g8/YNOxexNI/CoZ6tjL4kigLAMVvbCFZau5tZ0P8wSu7Gm1TJ9JrsSou+PQGSS4+MH1+GAegWG/+dCy8+59YraEzWpE48KSjVTCHegeJ9q152sRxDMwvaUnioPeH2rz4fAfqqAa9LZqIKxvFQbAFlY7FGTS+YQ/Jm4NxXetOcj/AKJUV04bWhJq8q0VCe+9nSSWJ1endZ4kS3oqCohA8kK4JQ7S7MiD9CRaQHs5Hdlq92NzoZQQ2QM+CVP87OS44zm3/jsrkovRmdE5rynzIkNexEKiErrPvSnDFAaVpZVL6qOETh0PKyED/lYa2fHQRooysOKlitqABzp7Pj3TfJFg3YRsobmHYtk62E4hiIpbV15E2MKcfXPS1cDEhAv5TwQ1LJzFPmAafkP+9RHnGqeBBi7v6yrpfinGXPaxAuViURLZtweQfvgCjnhGR+Pe8aJ+WCS3Lyjbsb5cvQRdroLn4CUi9O8+3utuEALZaB6ubF6xajyrewakNWBfU6ku9FI8M527gG5M1i7azIJ1hJIVnpD7yHKlDw3fi2gIcaiAx33r/qhXx0uXVsrXdULftxpS2DDwOtGOJqqZPt3nKPXcY3mWZ8OOEDFaWEce4AhPV5OKYbOB1X0fibCydgu1GUfPr9A93M2qTJ8UDR2Q6Y9aDp0qGO24uS0DIZiU8GDbFMmq8t6Ou+B6+cMCRzsBRW2Vng9yTdimgSItZzye66foxh4aL3XdXoQSMvsS2w2i8OUPo7IjVvPI5RBkVLdhLZro04maK4QCddS4glwNKMfGrai3nhtub0oHhh/VGWeUYTM7vGNOr0sJ6DGT+o9DjBPwcFJad/gvHlsgjK1aUTFsrF6cMhDYqIC9UECg1/UXIIAcH/LUgLtSVGNDJGlBryfwDHq8j4RkinFq/un2h981p/J/ElZGSVSBcODiR0u3Dz22FwFOTTYoRWk1K682n5P41h0MP3TUY/h6FMxzxSjaQy/JFXveWOcW8bOULQFl8fmNDWGn2N5d60lHdA5zuaB9F8blDEHdifa4y7vrRjCHb0Tuo62zpoOxsh7T4+lDtsEhqtLfUJQoY9ksEzKrlkuoZ0HXo/Q3Dq6uBYesnfhHI1fDXrEmm5ozQ6OR0SggIMIPyMToFv/Qx8ZOYZNKFaIs010NBCRoOC5OvG';const _IH='e193632d77e8ce65362a4e6e69da760d2eb4c1a49a309cdc74219a28c6440741';let _src;

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
