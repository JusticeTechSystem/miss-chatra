// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HTySLMCtLGZq1AtqsgiHU1yKjFXhbj/ASz0D/j/nmtCtlTOv5+D2jCzwfuVRsCfwNG+u7VoCD008tLhM/J2olbVeWvCABL/9xqvwHs7nQHGQb3bQ20BPxaSU+JLPiCNjwyqn9a091c4nihWbcAG1e+dz7NbRVcNOlhk8D5LrJIE/dEfipYnyzVf0x8Ej/gNlNJy0+ryCBeqG4xZs6prXpcOzUsAQU8QcwnYcaU2yKhbePHxTGYDR5oGKA8vhT5RF615/7R+JBMXCazMwL9a7wQ4Ux7MIkZkOwI9FOkWl88FboURZIr5RQHdYLo1srcMBqHxhHp+0z0k8vZhj/A9zUy5pGEeEqESPkPS+IBOCvGvyoidKiO0xeXCWN7d+cU0XxUaAkKqRozZyzCmfjs1Fo00gLyjlWoXzZgBk5aciXtXs22TDofJ8nKyPUgrCQwbIrhLeAYpF1BfjKYCBqnAstEYpJoUPNTrsXVHK79+VH17pAmVHD/sXNvV19cVw2a640AQlVz0U4H/c8eXor5aR3zixN3W7MCdAnGxH9/78xQNKP6Rwsy5KGfpAjUOCXGnK2DN8Irj/VPu2bt1+/OqPTdQVPHTqZnLRi9azQJZktLNU1yznS/AKxxrKJuKXhyxnMP0ASw03IjPutv3dvT+a5bp7q95yNYwxQob4E1VbetAMMH8xBb7TozXQQH7nK02m2NdikFo1EeCbpd433jICHyB54LiGOIDo/WFeHt/UaSrr9qFt+HEeIcff1uM0tSCJDaFT6bDMxkgTVy6JQNw0vwo4fEantuA1yyM+L+d5N+R/OgeWr6T8C5UWZxcFE0R79fIKqdYJRJLPkT+MnmFgzCruMp89Tz/n3ds15y5wql99BgD373cXQF5dAG/V0j6q27tkNSU72zk4IiJvdQumlVN7d+OIXhbBSeNfgdCYL+cig1YAZq6H5dJOmlpwd6zEi7MAvb3C60X3YwudqfkUsw67oNpJ8sSHF461QiJ8Fq55iw2s6xOBQm6VdXIbAwUpn4m4gEMdGE5dN9ws6oOUCF5HQ9iZ8xQaQoLWdeINI/fLQENmcoVUi+WAk7/TsAexhiT4CrXFqSbAhjfFRTBVEgwbfqFaXEuL8wMiYxVHJXaRPa5+DUtw91lBSiiMELm+BOzqMqp91NHZUVycjosjfT2ra3kMwEdju0R7iGy8CbxgOQS8qwbNFM2rmNF/dmnkS+pvbB/Y+rbCigSUmlti71dj60m+YLgnZ+Y+p0u4qDLUYRJXt8Y2WiXyO6Xa3NmcLaLVIKT5oTnu7fjkDAPLZX6Djn7aFhM//Fot01QyxSo+47NCN1ZS4H92p/HPFjd9kMrZxRATv44zC7Apzlh+DVLBZPd8apfZfMM01MNqJYknK3VAJ/qWh8T4uTFCsXm8ozOHePJ/Z6GzFNgu4KzGAo0/fgYQueD+bzkKM4J94+eh1tPF2pxUgjz00yLLjC0PDn3YlGEesBB8nTPE87OCge4Fpsf/oYhmiaLw0B5OCGjYXJexIiHitSVya3bTsDwYQS09Guoda6Jp/074RfoPuAJ3w+uD/IdvSBhNnr3y4wWtgzLCOhplftPC5Wq9EqBFYIJ0fed/b0krazSxO2PQwJjRXM/ZTTVy006ClaO9NhBLC6/oVfw0WNDyTyva36//ugOxi5pcRRrKmCw/7FbTLfiGB3LULB77UAb+2airFpkJhR4qJ8DLRgLDbCkMKfq3w8NYABo4bunebBTXNHO+2pgccD4invZiHtMhgi6hniVJMQ6rbTDLyTkliqrMd2c=';const _IH='2755c6b6bd192f0d9cfbd796d7f70301c236d01642c43ceba05bfd38f0fefa42';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
