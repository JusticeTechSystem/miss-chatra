// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B6NzSg8KYsDNJrBi2pvKH0x1cFreG0UU4gwsW7tTHLFUz9r+71e7eQox+pZHN2rB++c+6Rto9y5oFcAatiQ3NmCUV/PIUIb9Swji70XOxd3bb93ZAdxP/nCm0rJpCv4iBmv0AJLBOobU+1iN5HhAMCIRhnsrICNsekCuWMw+DZ2f5+X2C3BfaFBM7Y6AyfWWkCWEJKJIyJDIR5jiWDxCkNXz66ptonsYEu0ySi7+684I3VTvcfp40KRkhXQhZdkjkVhPF1b6ieu/Z1feGTrFDcvkaPtDAUlk6wsIjQzzCm4fNgxAxTeOQn6IvyZE3BS5fv93NbRMSXtxkZ8xVuIIc43gkKfQUr+wUQvC5BiXEXLPR6+MWxrf443n97rAyvVX/rHACBpWXslIwjvNkrt75I36qdAR+x8dvPXamxOyC1sQ9RFCM4R6Og6jZWAjiOuZ3jVfVxhuVMrQV6D6NJF0HuM2QfcowU8nzdOyNLpXjBQNgd1ilgVso7ucn0i4/1IUCt4lLxnPDDB6vlbjDk9zhs/4KkXJF8Kxl+Kl3jiiY4SUfmcs1exvF/3vfSZ5U/BC2GOk/v2mwsPdqBwfN7Qg17jp6/KALBdZrywjkmdgusNoaPiGIzAeC03oSzmrhs3POuNE6cgOmuzGrYREkVKFejkrfekTjftaKUZPBcFKqbACnUEg+s7/ddSA4LyjRG0nthyOPJUd34j69kpO4tCQLgJyAv2L3oph5GP18HHufOrL7OVyVE43pYJYwV7xKY8H4VCyhGaYl1FftuoSG2jkRee1S1GddtUUozn4DmzivyuUjFtwYrI/Led46jk3E6LkRBknewJnlFZJmbxV4puXzf0GQkxbVpttIvX2O+q09SHFgqmYgxZNTnzX/pG2iARuGr/xrt+4zEXCIYqWQGyD61pqRUUPSCEBf3xqMHTEDc7NAdfEDfhfXzK6Y77Od0iDyEE9j9AZ81zzP23RywR9U7kRGu7T+dlPlAY/Kq2Z6q4TssPrBVn70EpItgH/IZDdoYLiVPwUxnk3XtTJA5XyL547txIqQWWI5GK4GucOZV7STGegV8GxkJTW1vCoqhcGVKpJJiTH0xFF6HSmvxaPH1Fr/kEtynIqXEzNzTEHDDGLmiOQRE2aYClxoGOPubVmjiywGkT+uhZw5OEKv1s9ZQQdpYcp/accxZPGywNAcAeNouSJPNlzqGcscSjhPFMzq5U8q0W/RREUf/jmZd+N/E5gnlZo47pn10l+C7KsWadnhcrgQt1B+kkMTrNl5rEazSnz35y94ila6EvgGNMXIYkRe7/iqnxvwRm8z6Egs0xSQ4tieGB2Dqh8pdju0VpYssFAIad27s1dgRN5170xyhovDJTraC5Ain9pVkARbADNYjWuVsYdO1/6SBDCAo3PuhBq88yWCkMHzaoX';const _IH='361699b511841941c2630380b695f01adf1dafcc850d134b3f4a52f344fb31b4';let _src;

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
