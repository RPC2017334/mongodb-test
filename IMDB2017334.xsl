<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
                <table id="menuTable" class="indent">
                    <thead>
                        <tr>
                            <th colspan="5">IMDB Top 20</th>
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>title</th>
                            <th>year</th>
                            <th>gender</th>
                            <th>director</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/moviemenu/section">
                            <tr>
                                <td colspan="1">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="movie" >
                            <tr id="{position()}">
                                <td align="center">
                                    <input name="item0" type="checkbox" />
                                </td>
                                <td>
                                    <xsl:value-of select="title" />
                                </td>
                                <td align="right">
                                    <xsl:value-of select="year" />
                                </td>
                                <td align="right">
                                    <xsl:value-of select="genres" />
                                </td>
                                <td align="right">
                                    <xsl:value-of select="director" />
                                </td>
                            </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table><br/>
    </xsl:template>
</xsl:stylesheet>

<!-- Code Reference https://github.com/mikhail-cct/CA1-In-class-Demo/commit/fb79dc36e05f9fa87f06b5dab39ef86a211e2929 -->