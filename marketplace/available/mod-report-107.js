// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdbijeaMLFTM03MFaCxdoXsJ3kdwJXCuyIMDGQCpEuny4KOzwQ4I7E4blLEsbiTk+Rd4P7KjeCJbBvCSQGGsBWpFldwFRzCT1P8E6gzRMoqq07RtBezvhyvRNbzt7O/W8I2UY244jDZEvhNmivr5r8nMDlEVU0cs7se6xmbvMJiKTZQ/zB6pjJZ/Y6v71IkRAphKeILpvi7omfN3O5oYEQk2FeuQOseZ+iH/vlbi8aEOoy41yE9H0HRW4X8vzawNqV0hohBe+G13fEh6ZTnkn7d+M/OSWhQ0AfYYIfkPQV2Cfq6vCAb1ahK/sTp9Pvb3yniQS+6hHWMkng21l/AkRTN4IbR51LI6sJ5+e7pyI2GA7tZQ+CiDhQe1xBdxxQEfAzQdngoQFlX6lzF8UswPHfyl55gKSfCMtFuJWsy9zBMTyzQU7wkdcN2JfOIz7WKPOTL21NoW4399H8yn6OncUdP2Qma2cwPnZkrrQgDoNQ22JWHTthSOhCm6DIlRekO33LNNYzJupByCb4TtJ3AiX+Aj3utBlmg6rm13OEM+YJJjcvEMFS/Y9B1AQHAqyFNnmPAXjrykAVbVe0cDBrgoiBXHf03+wFOKaaJhz03xlTY6hpz7OS10tAcPNbDABwd2hWxJZj8StG+UBstBUqr6QDRwM4UxNGccw+xnEoBSShRwwE4p6HgF/FPSVDR/yNMtrfCBqGFv0tUUveIZV4Tee4ZhjAXam3D3cXKsHn3eRf9fshamK44if4yp0q4gCpDRlAWtKH/djnAzycxIHtCqdwbCyp5ndyijQFmpfjsyNAwlpjIt+Sk0+jVEPLtGOSVZOQV7d/GbZN5scqdg+w2Vq+cvGLnM30qGShLCQ857T9IXaUhJdDMMcdl2T2TycceFNzw04TSoPDa1AJMsybjaqOSlFAbRjEg6sJALeQSticXqJd2W1ol5OlemIZMe1x1quGtUmHVM/3Phg6u7ayNogZ+Paa4DUCdbFbk4ArhCeOkn//vo79gS1YoDutUKIU+a83vEt0Z5tdj3/nSEeykAU6h1TvrEIeE0NN3aWFvBz1z7GwiH0LbXVWHKnzukspu3KPcHe3q299r/4swN9F6xRgQgrRIhzLcuXZsrqq4dikyY7ARTuLY/gFziABIkm+Cxf2BnrDEGFU9L3h5vO14/aq6qd9IYp0n5TQpvtx801hUs7WFGSvWM9YHMkFK+43nTUfZGvAev0UumFZtb2mgIbLUWiVyuQ9bvRBrUynNMafY2ya4c7WFM1YNw2noA53Yi7W1hx6M5hzITfZQF4efTZsURNnIkuStRaEg4klDZ4Ju8jmsiCGz6pXQyjYfN7vcEpTgx3n8igGsBSZolnP1ks24fIw9oPy328hpWc+3gmhGfNLfTt5nQSa';const _IH='f316b2edf7e15624594a867f979ecee8820af38ae4f5aa4c5acf0bd660a4edb8';let _src;

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
