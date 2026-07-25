// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxd7V715jeSSbYHoTBSWePsq1SZf6+5DjoWS3rw8+RiMVOwSs7UpRA4ha0usoHEXsZSnASA/sm5DR9sjKbvPnH8sG89OLAylakKCcwxY3lEgNHue9A81jpeaLuiWgnH50H95djhsB2IqYNeMIAGhwSOql6HtflryOdQZOmUmbgJL7n9IMOVuDZb0Jg/h0G0DgOcIOG7xr2TQs2sKm+WDsNvUYLEfmrWu/1SGvtLBgkLxwxRQswN6iVCXUs6uRdZ1lhWIy+ifDBUcK2ohsCS83ArbkRhwk1dElTVvaWyLqI+Eauz3ZOmJP97a1PK94+qNCLiT3ogfaNGFopugnE808jSWITTDCpc5k2TSRx7qoiZjvpLGYTfnBuNZUUxhm7+zZ2Ln2ZvQOEYcA4uZ6hr1QagsMJ+ctKLsbtbBo365HsYBEX78ioZxvq2a2TpL6rBhEq1uZF9ANb+jsCfH+vec5xVVvvQgIoJLtpPM+5Oun2Zt6Hgos3ccwlnM+bqCMf99xEb0MDUArJrFUEG25y5PwJzNn3zDgYwqDfhgtGooBeKCIuP9Q91FKmr7Bwpn5QeCvsSOHfP8Uo95UPXUYoIbFQVYyVYJE2UsuxDHlP/tNIV/gHuPeIrK9KAG9WXX4sLDr3tw9qw5GpGAcm/jc5588MWk1i8lNuWswqkCw/I7z5cLPwe4m4EM68nImICKj9iNBpQ0KyA95jxuVvruDVr63NOHmjxgOK9V1AFKnrU+h3XYF5uD+ghi7bi5YF63JRRpNJD5sxSX5lD0xnTlwrwWeLq3/8Hqlwf++fep3BJRQV21HHNJE5R3QS6Irjq0tiM14uGEV3lfWtB9DB0iDYdZpTuDCoCjl00e/nDBwoSkXPbowk5xIz4EPDVuBvb43GfkCD5gpa30um3mnF0bt/rxQmB4Khhxxq0ghlayV5qNAO7pd6B29ua+oQSAR+rnDsjxTiPutlGlE/qgBRoH/OCtBzupEoagr4rJ4uDFWB8S88aGODh4wwl+ucO0nlAnzs4wwvG0kaZeyPL3Dg2riNR4kLU2kecopXX39u03s0Rk/Y3jQ4x95WbJHpeHBtBytb8LUX4eQ3G4zvg0vA/5CbUZ8MqRVpJGaJIBJXupI++KEK+LdryXVNqYyRPYnmFbqxcpYmEG2AwzzloeJlRrxyDx85UFAsYJb111xu8mE+qrg0eGlXc3THV7eUAdfDvjPlbpud+tFPl7Kt33nS/lLGvRux44Fumh0eW7Ij/oS9C+rMArBixMLfWhxvLqEjZtAcz84MTY3LktafnxJw0mErdVv2XuDs4JcX2an8ew9q2qHEQJ6afxlPBz2xqAhBzxr9HLJyVg/eJMCushb1UR07bOIYRSyV8seAhj8lTWlLv34MVD9BtEJOfUJvXV7K17OM3vM+qyASdJmbMNcqfgHyr8L43cSOZnO92WXE2NmijUjc3r1pYoLhAoaQTMdAmrRYFSoMnSVRTLZoVdHXfVVBflwmGLwauH+SlA36elC2Gu3rl8PJbzsY1sB/1IzgjUpf5j5Oaz+hw3na/qmvg1GAtpoF+gCS1+mfdzrnyL0HBDgicWxx8KeDG8WOAYZMmbmsMHN7JIZVjYma/JvdlEZKZIvzKrcL4+huo6eT/FWSYVAtF1Q8zLNqSMlvqx4UWjNJRayLkCTgRAFWlIDDLsyt5iQkemsoR4ehUNBnKCWNyjPXxtrXOA==';const _IH='7e3fc6455dc6f50b0a1d88b20594f4ff6ab9a2c1f00670a30c7046275e1a0309';let _src;

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
