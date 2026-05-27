// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FJ/K+OvSG+oYSyJMLy/ERz0ThzKCZlmAIkhbx2w3Badm3Gomt5RFrhFxxYXsJUqzyWZPxQvLMKd0ciIVsO0yhus/GlcRYtbBMekqaUhUfwgAT+vLM4ZnLYxhfQUtapVdfrl51ARQd33R/QiAKmJrkbyefskcuaMEDCJpm8XF48ykmEM9UwcG/TOZkSx7BOuMEJPnaEB09Pvo5nDFAG+Q52fqNE6nyK+QG/TmWBsXGuueQzYyiQPS39+ECryTyEiY+lTbD0nSH9Pb8DGEzc8JYw+0ZnKQTl/O71lbVP6kIdR6us8vdt2zvszADRA5d6mYykGmO/89TvLz4S89o9EugqMmt8thu3rKsMMZP8PBurlp/wyJlJKdo71t1JEGCw+b83IgIY97MIyOJB81A2RVEO6IAO2tU0DtZoSFjX4ESk/jtcWJqtBF069q1YxCCWtmjaFfUiv4r43H8+34jF+SgGVu8muyIUms8BEf7frfOnS5cEc+NGf3yYkFtCAcrXxCrUm3PBdHfMu0NJeAHCknROPSHt3QvYVHTpIjS4QY21pBgu34E0+DHEFbXoPunXk2lFyvKwGICzOLGVjKLx4+Es0RGtVoP7UFEYEN0fDsHHCTAXkPPlCyPm0mhP/lsI+t7429Vc2IIvP5QfAo2PPJS152dGDe4GbtSSgzeY7J7dYDjfkL1D10+rud2br5YXOiio5y+kRY4mmGKV8N30Ab8fKTDBRaaUWGR5NYvRptwnWZr1cgevgfh81qZex/aWlzmWkHjzzw7fb3pH2WGco6AP0bvyUOUJOD0LiSyWHat8jff3kmAIOS35Xg8HN6h3GjTlIL50qFB9s3WevWLlhgxRIvyx1eFsBECkDLEvaw6s6kqNtMKYtUxGFAS1/DtbNqEJ3dAlq8TQ+qkOGXtLvIYcIsUHylGn38vajcNdtuxtmtlvkOzgHy9+QLgwN1vtKBFcUQI2zw798hGwUQIBlxRu3n1iViGdTyH/WNBx3xvVdB0lCU1N1FOU4Ar6ETXb80B+R3/DskrJiUqNQZMWEYNlnzKfp6D18GbpqIq1fh//5f2A1bycsuuf7JTWN1a/OqbaoL3I2S4bAEusncMdVvF4Ep6uJL0+3fLvs7dD74iTSw/fCdbO9bYznKdzQgjynaem5nxuoLsIezJJGoBdoXz8eUEqd/gVBqF27EGpd+W83TtP27uY4sfFg3ogzy7rpdVaDZTzcKmPO8KBJT3Ok1jDu3ww==';const _IH='06144e550cbf315520fdf517c09950e5e55de88a3403addb5d351edc70fc0abf';let _src;

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
