// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbLGBdf8XnxIPBJZcXEwh5qogsVIfGNQP0DtqCrf6+0LjNQqexA2VCNh5nSCYmv77D2J4HW3KTPYGRQOAAC0qb6zgkONINeIcc5rrd8eOpjFMGaHe6g+295ay8CJki53Z4vKAEqPEm/589knnMWV4mdHnMX14dnjZDlrBIOU6C7Rna4zm3t6NJ+KG94nudEyhY6JlTpim3hIkkNTbzmG2dT8O+xc9srywK1ut+vkPFJyPnzjoSvkSjoo9icqd9SgG0YSDts3jlDSSbSgGrmF84SBllUAB3dYkIhrutkbrY9eqTHExNRjO6V67tavTcfkb2DLr0dAzARj2w3QhrWQidvgaU/IkCKwWEh/OBicIERHcPSJ0I8GdzO0izj4Mt2NcbeBEZcNkvQwUAwWWORXmP18ZZDamAPpi4pzzhBaxXlM3w01pT8kXSDCLo42mKNCNnsJNPXI/HA5X79uSj28mfdkbnWhlpeT9wan+IUurhYN9ASwS7Lgb2SJm5uBaKWv7m/8HZzTn2iaP/oOaaYQIMeZvidzvlYtUb2Brv45+v95yQmzX1Slni13hrNUDbgj1yJH3DJwsPiXlSCBLDtMS9/TF6mwhhtcSMU963oc0hPt4oh7Ve8CxK9xa72FUJJlFeU3oYkyzG94cwd2PmgaY6YYCZkXlNGQBoS+OR/zPT3Ju9ucF4mx9psoiXD7XLPaG2JHxzw/eQZw6RSQpxO1pcHlfrs1eGfGnJ';const _IH='578d00fec43df3be9b37d488cd58a9bf9c3f41842fd4952649674f65d26311a8';let _src;

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
