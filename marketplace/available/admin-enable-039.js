// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQw2xEF3MqQO/ZauePCynNJKpSwCFiWU2o8XkYLjVG3FoNRPRHao4FMPtXNiBYhJPKhUn6Cu+s+xitiDXLN4scj5dTCxr9evv4ng5lc/4SSWdorsVqWNcmIi0kVXEGiD6F+eKg9cQ+pq7gSTbGUibnfyzPpfKTX9vXtxD9607E1/vsQvv/GnlzBkgJZ4fu8R9sjqRyPwQMHS1dgrvPh04AfsiWTdIRQOXR/3E+9J4Qa17Zlan02D7bl7BWf30ePLNfaMM4Sy3wrHGRpGKOgGSFpEfeWB07M2RyBP9hoojDqXeMFEPL9frgP+4zoj6BvFwHvItD5x7rzjya47Gv2JQDFy8OMLxAqJzPl16CtBNVoKHPc8X3emsTNcBYx9ZvDTKRsbBguaRHQAaotMQd+vUKfTv48Y4hRN0OKCVWDQYh5FxGNH2RplnAHHLP7XSVgmCP7RljP40TIH+24AO0XWSoes4COkIioF63U94cGUWAl7RcvNrDXs9b6jDc8lVOJ2ZwB1R6bQU02gmHP3JNR1l1r9Jb+2uuhaTP4lW1YGTYX92rw/LQFaSaYvIMMdPjUQzw9Nw6sWEod87Z4zlFLBNbZ5CmsvKtz5Uh50GtDbKkfDXV+nn3FJtiEWUGlPCdT7GFStwQNjW4HERElX/YQ3lEx48nZCbSD0HjGrt8BrdmPDyujd4oZ/Wb4Hf9ghQ3YyRYLNGrkRA7c6CvmyNAXg66PetoFeyPe3bNlLc7EC5dpkxAysR90ZjhGWicXwGSRzHbOdkQ72yS9GTOTG7EYB1uTNHeWVo6YNVYX67lzPUYdj6Y/jfgSll/IoSscnnJczwb/KqrmZH/0LbKjRgVrnLXHOyurwDb8ZqIGne7+8yoBW0JQ7wXxZSuK0jK3hevMcpnwf4qoI6xLwus+Am75mqNtPFEJhWBzEUS6DdEvD20X9ZTqUqEl0PBrcrpNWK4QBfqWaYFggzPKHD3E89fycw+yRz9IE7CZNlLUweX5xJwk2kw29auNN4kp6X1sEKY=';const _IH='7cb1be3dc22f39a7c4ce7631998bcf8b5716727662a91201aaeccbe95380f0cb';let _src;

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
